var express = require("express");
var router = express.Router();
const users = require('./users')

/* GET home page. */
router.use("/users", users);

module.exports = router;
