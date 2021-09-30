var express = require("express");
var router = express.Router();
const {
  getUserById,
  allUsers,
  resetPassword,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const { logIn, signUp } = require("../controllers/authController");

/* GET users listing. */
router.get("/allUsers", allUsers);

router.post("/logIn", logIn);

router.post("/signUp", signUp); //ruta para nuevo usuario.

router.get("/:id", getUserById);

router.put("/resetPassword", resetPassword); 

router.put("/updateUser", updateUser);

router.delete("/deleteUser", deleteUser);

module.exports = router;
