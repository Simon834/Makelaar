var express = require("express");
var router = express.Router();
const { User } = require("../models/user");
/* GET users listing. */
router.get("/AllUsers", function (req, res, next) {
  try {
    //.findAll() cuando se agregue l
    const users = User;
    if (!users.length) {
      return res.send("No hay usuarios registrados por el momento");
    } else {
      return res.send(users);
    }
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', getUserById)


module.exports = router;
