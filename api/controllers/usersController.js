const { User } = require("../db");
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

const recoveryPass = require("../email/emailModels/recoveryPass");
const userEmail = require("../email/userEmail");

async function getUserById(req, res, next) {
  const userId = req.params.id;
  console.log("me ejecuto");
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(204).json({ msg: "Id de usuario inexistente" });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function allUsers(req, res, next) {
  try {
    const users = await User.findAll();
    if (!users.length) {
      return res.json({ msg: "No hay usuarios registrados por el momento"});
    } else {
      return res.json(users);
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function resetPassword(req, res, next) {
  const { email } = req.body;
  try {
    //encriptamos pass
    const newPass = Math.floor(Math.random() * 1000000000, 1000000000);

    let password = await bcrypt.hashSync(
      newPass,
      Number.parseInt(authConfig.rounds)
    );

    let user = await User.findOne({ where: { email } });
    if (user) {
      user.password = password;
      await user.save();

      userEmail(recoveryPass(newPass), email);

      return res.json({
        msg: "Tu nueva contraseña ha sido enviada a la direccion de email ingresada.",
      });
    } else {
      return res.json({
        msg: "No existe ninguna cuenta creada con ese email.",
      });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

module.exports = {
  getUserById,
  allUsers,
  resetPassword,
};
