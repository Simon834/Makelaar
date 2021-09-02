const {User} = require("../db");
const newPassword = require("../email/emailModels/recoveryPass");

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

async function allUsers(res, req, next) {
  try {
    const users = User.findAll();
    if (!users.length) {
      return res.send("No hay usuarios registrados por el momento");
    } else {
      return res.send(users);
    }
  } catch (err) {
    return next(err);
  }
}

async function resetPassword(req, res, next) {
  const { email } = req.body;
  try {
    //encriptamos pass
    let password = await bcrypt.hashSync(
      Math.floor(Math.random() * 1000),
      Number.parseInt(authConfig.rounds)
    );

    let user = await User.findOne({ where: { email } });
    if (user) {
      user.password = password;
      await user.save();

      newPassword(recoveryPass(password));

      return res.send(
        "Tu nueva contraseña ha sido enviada a la direccion de email ingresada."
      );
    } else {
      return res.send("No existe ninguna cuenta creada con ese email.");
    }
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getUserById,
  allUsers,
  resetPassword,
};