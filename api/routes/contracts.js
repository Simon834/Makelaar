var express = require("express");
var router = express.Router();
const {
  newContract,
  getContracts,
  getContractsById,
} = require("../controllers/contractController");

router.post("/addContract", newContract);
router.get("/getContracts", getContracts);
router.get("/:id", getContractsById);

module.exports = router;
