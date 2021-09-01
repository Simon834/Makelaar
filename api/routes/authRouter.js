const express = require("express");
const router = express.Router();

//Controllers

const AuthController = require('../controllers/authController')

router.post('api/logIn', AuthController.logIn);
router.post('api/signUp', AuthController.signUp);

module.exports= router;