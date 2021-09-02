const nodemailer = require("nodemailer");
const {recoveryPass} =  require('./emailModels/recoveryPass')

const {
    MAILUSER,
    MAILPASS
} = process.env;

async function email(htmlModel, userEmail) {

    let transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: MAILUSER, // generated ethereal user
            pass: MAILPASS, // generated ethereal password
        },
    });
    
    let info = await transporter.sendMail({
        from: MAILUSER, // sender address
        to: userEmail, // list of receivers
        subject: `Nuevo mensaje de Makelaar`, // Subject line
        text: "Nuevo mensaje de Makelaar", // plain text body
        html: htmlModel, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
}






module.exports = { email }

