const nodemailer = require("nodemailer");
const { recoveryPass } = require("./emailModels/recoveryPass");

const { MAILUSER, MAILPASS } = process.env;

async function sendUserEmail(htmlModel, userEmail) {
  let transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: MAILUSER, // generated ethereal user
      pass: MAILPASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: MAILUSER, // sender address
    to: userEmail, // list of receivers
    subject: `Nuevo mensaje de Makelaar`, // Subject line
    text: "Nuevo mensaje de Makelaar", // plain text body
    html: htmlModel, // html body
  });
}

module.exports = { sendUserEmail };
