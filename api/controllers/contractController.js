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

module.exports = { newContract };
