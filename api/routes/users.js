var express = require("express");
var router = express.Router();
const { User } = require("../models/user");
const { getUserById, allUsers } = require("../controllers/usersController");

/* GET users listing. */
router.get("/allUsers", allUsers);

router.get("/:id", getUserById);

module.exports = router;
