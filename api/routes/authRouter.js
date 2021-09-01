const express = require("express");
const router = express.Router();

//Controllers

const AuthController = require('../controllers/authController')

router.post('api/logIn', AuthController.logIn);
router.post('api/signIn', AuthController.signUp);

module.exports= router;