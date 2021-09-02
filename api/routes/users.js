var express = require("express");
var router = express.Router();
const { getUserById, allUsers } = require("../controllers/usersController");
const { logIn, signUp } = require('../controllers/authController')

/* GET users listing. */
router.get("/allUsers", allUsers);

router.post('/logIn', logIn);

router.post('/signUp', signUp); //ruta para nuevo usuario.

router.get("/:id", getUserById);

module.exports = router;
