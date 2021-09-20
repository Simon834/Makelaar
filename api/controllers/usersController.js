const { User, Contract, Property, Payment } = require("../db");
const bcrypt = require("bcrypt");
const authConfig = require("../config/auth");

const { recoveryPass } = require("../email/emailModels/recoveryPass");
const { sendUserEmail } = require("../email/userEmail");

async function getUserById(req, res, next) {
  const userId = req.params.id;
  // console.log("me ejecuto");
  try {
    const user = await User.findByPk(userId, {
      include: [
        { model: Contract, include: [{ model: Property }, { model: Payment }] },
        { model: Payment, include: Contract },
      ],
    });
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
    const users = await User.findAll({
      include: { model: Contract, include: Property },
    });
    if (!users.length) {
      return res.json({ msg: "No hay usuarios registrados por el momento" });
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
    const newPass = Math.floor(
      Math.random() * 1000000000,
      1000000000
    ).toString();
    // console.log(newPass);
    let password = await bcrypt.hashSync(
      newPass,
      Number.parseInt(authConfig.rounds)
    );

    let user = await User.findOne({ where: { email } });
    if (user) {
      user.password = password;
      await user.save();

      sendUserEmail(recoveryPass(newPass), email);

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

async function updateUser(req, res, next) {
  const { email, name, phone, whatsapp, password } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      user.name = name;
      user.phone = phone;
      user.whatsapp = whatsapp;
      if (password) {
        const updatedPass = password.toString();
        let newPassword = await bcrypt.hashSync(
          updatedPass,
          Number.parseInt(authConfig.rounds)
        );
        user.password = newPassword;
        sendUserEmail(recoveryPass(password), email);
      }
      await user.save();
      return res.json({ msg: "Tus datos han sido actualizados" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function deleteUser(req, res, next) {
  const id = req.query.id;
  const userToDelete = User.findByPk(id);
  userToDelete.destroy();
  res.send("Usuario borrado con éxito");
}

module.exports = {
  getUserById,
  allUsers,
  resetPassword,
  updateUser,
  deleteUser,
};
