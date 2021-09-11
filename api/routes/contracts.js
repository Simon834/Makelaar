var express = require("express");
var router = express.Router();
const {
  newContract,
  getContracts,
  getContractsById,
  editContract,
} = require("../controllers/contractController");

router.post("/addContract", newContract);
router.get("/getContracts", getContracts);
router.get("/:id", getContractsById);
router.put("/edit/:id", editContract);

module.exports = router;
