const {User} = require("../db");

async function getUserById(req, res, next) {
  const userId = req.params.id;
  console.log('me ejecuto')
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
module.exports = {
  getUserById,
  allUsers,
};