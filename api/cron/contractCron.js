const { Contract, User, Payment } = require("../db");

async function updateContractCron() {
  const contracts = await Contract.findAll();

  contracts.map(async (con) => {
    if (con.status !== "eliminado" && con.status !== "pendiente")  {
      const contract = await Contract.findOne({ where: { id: con.id } });
      const endDateContract = new Date(contract.endDate);
      const today = new Date();
      if (endDateContract < today) {
        contract.status = "vencido";
        await contract.save();
      }
      if (endDateContract > today) {
        contract.status = "activo";
        await contract.save();
      }
    }
  });
}

async function liquidationContract() {
  const contracts = await Contract.findAll(      {
    include: [
    { model: User },
  ]},);

  // console.log(contracts)
  
  contracts.map(async (con) => {
    if (con.dataValues.status === "activo")  {

    let paymentUser = await User.findOne({
      where: {
        email: con.dataValues.User.email,
      },
    });
    const newPayment = await paymentUser.createPayment({
      idPay:"Liquidación Autom.",
      status:"Liquidación",
      userEmail:con.dataValues.User.email,
      amount:parseInt(con.dataValues.amount)*(-1),
      ContractId:con.dataValues.id,
      date: new Date()
    });
    }
  });



}


module.exports = {
  updateContractCron,
  liquidationContract
};
