const { User } = require("../db"); //falta conectarlo en db
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const { sendUserEmail } = require("../email/userEmail");
const { newUser } = require("../email/emailModels/newUser");

//Proteger las rutas, isAuthenticated 

//auth0: permite terciarizar signIn logIn --> investigar
//token

//LogIn
async function logIn(req, res, next) {
  let { email, password } = req.body;
  try {
    //Buscar user
    let user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      res.status(404).json({ msg: "Usuario con este correo no encontrado" });
    } else {
      //comparo las contraseñas
      if (bcrypt.compareSync(password, user.password)) {
        //creamos el token
        let token = await jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });

        res.json({
          user: user,
          token: token,
        });
      } else {
        //acceso no autorizado
        return res.status(401).json({ msg: "Contraseña incorrecta" });
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

//registro
async function signUp(req, res, next) {
  try {
    //encriptamos pass
    const { name, email, password, isAdmin, whatsapp } = req.body;
    let hashPassword = await bcrypt.hashSync(
      password,
      Number.parseInt(authConfig.rounds)
    );

    let userValidation = await User.findOne({ where: { email } });
    if (userValidation) {
      res.status(409).json({ msg: "Usuario existente" });
    } else {
      //crear usuario, a traves de formulario de front
      let user = await User.create({
        name: name,
        email: email,
        password: hashPassword,
        isAdmin: isAdmin,
        whatsapp: whatsapp,
      });

      //creamos el token
      let token = await jwt.sign({ user: user }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });

      sendUserEmail(newUser(user.name, user.email), user.email); //envía el mail al crear el usuario

      res.json({
        user: user,
        token: token,
      });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = { logIn, signUp };
