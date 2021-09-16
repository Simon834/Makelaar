const { Contract } = require("../db");

async function updateContractCron() {
  const contracts = await Contract.findAll();

  contracts.map(async (con) => {
    if (con.status !== "eliminado") {
      const contract = await Contract.findOne({ where: { id: con.id } });
      const endDateContract = new Date(contract.endDate);
      const today = new Date();
      if (endDateContract < today) {
          
        contract.status = "vencido";
        await contract.save();
      }
    }
  });
}

module.exports = {
  updateContractCron,
};
