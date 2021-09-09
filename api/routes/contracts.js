var express = require("express");
var router = express.Router();
const { newContract } = require("../controllers/contractController");

router.post("/addContract", newContract);

module.exports = router;
