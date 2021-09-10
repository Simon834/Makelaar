const { Contract } = require("../db");

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
      file: file,
      comments: comments,
      PropertyId: PropertyId,
      UserId: UserId,
    });

    res.json(contract);
  } catch (err) {
    next(err);
    return res.status(500).json(err);
  }
}

async function getContracts(req, res, next) {
  try {
    const contracts = await Contract.findAll();
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
    const contract = await Contract.findByPk(contractId);
    if (contract) {
      res.json(contract);
    } else {
      res.status(204).json({ msg: "Id de contrato inexistente" });
    }
  } catch (err) {
    return next(err);
  }
}

module.exports = { newContract, getContracts, getContractsById };
