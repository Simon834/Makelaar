const { Contract,User,Property, File } = require("../db");


async function newContract(req, res, next) {
  try {
    const {
      name,
      startDate,
      endDate,
      amount,
      paymentDate,
      file,
      comments,
      UserId,
      PropertyId,
    } = req.body;
  
    let contract = await Contract.create({
      name: name,
      startDate: startDate,
      endDate: endDate,
      amount: amount,
      paymentDate: paymentDate,
      comments: comments,
      PropertyId: PropertyId,
      UserId: UserId,
    });

    if(file){
      const files = file?.map(
        async (f) => await contract.createFile({ url: f.url })
      );

      await Promise.all(files);
    }

    res.json(contract);
  } catch (err) {
    next(err);
    return res.status(500).json(err);
  }
}

async function getContracts(req, res, next) {
  try {
    const contracts = await Contract.findAll({
      include: [{ model: User }, { model: Property }],
    });
    if (!contracts.length) {
      return res.json({ msg: "No hay contratos registrados por el momento" });
    } else {
      return res.json(contracts);
    }
  } catch (err) {
    return next(err);
  }
}
async function getContractsById(req, res, next) {
  const contractId = req.params.id;
  try {
    const contract = await Contract.findByPk(contractId,{
      include: File
    });
    if (contract) {
      res.json(contract);
    } else {
      res.status(204).json({ msg: "Id de contrato inexistente" });
    }
  } catch (err) {
    return next(err);
  }
}

async function editContract(req, res, next) {
  const { name, startDate, endDate, amount, paymentDate, comments } =
    req.body;
  const id = Number(req.params.id)
  try {
    let foundContract = await Contract.findOne({ where: { id } });
    console.log(foundContract)
    if(foundContract){
      foundContract.name = name;
      foundContract.startDate = startDate;
      foundContract.endDate = endDate;
      foundContract.amount = amount;
      foundContract.paymentDate = paymentDate;
      foundContract.comments = comments;

      await foundContract.save();
      return res.json({ msg: "tu información de contrato ha sido actualizada" })
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = { newContract, getContracts, getContractsById, editContract };
