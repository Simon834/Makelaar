var express = require("express");
var router = express.Router();
const users = require('./users');
const properties = require('./properties')
const contracts = require("./contracts");

/* GET home page. */
router.use("/users", users);
router.use("/property", properties);
router.use("/contract", contracts);

module.exports = router;

