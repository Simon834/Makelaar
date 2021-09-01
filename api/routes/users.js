var express = require("express");
var router = express.Router();
const { User } = require("../models/user");
const { getUserById, allUsers } = require("../controllers/usersController");
const { email } = require('../email/userEmail')

/* GET users listing. */
router.get("/allUsers", allUsers);

router.get('/email',function(req,res){
    email()
})
router.get("/:id", getUserById);


module.exports = router;
