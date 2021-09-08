var express = require("express");
var router = express.Router();
const users = require('./users');
const properties = require('./properties')

/* GET home page. */
router.use("/users", users);
router.use("/property", properties)

module.exports = router;
