var express = require("express");
var router = express.Router();
const {
  newContract,
  getContracts,
  getContractsById,
  editContract,
  deleteContract,
} = require("../controllers/contractController");

router.post("/addContract", newContract);
router.get("/getContracts", getContracts);
router.get("/:id", getContractsById);
router.put("/edit/:id", editContract);
router.delete("/delete", deleteContract);

module.exports = router;
