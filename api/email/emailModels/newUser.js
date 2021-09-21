const {emailBase} = require('./emailBase')

const URL = process.env.FRONT_URL || "http://localhost:3000"

function newUser(userName, userEmail){
    const content={
        title:"Bienvenido a Makelar",
        message:`Hola ${userName}, se ha registrado correctamente tu cuenta con el usuario ${userEmail}`,
        buttonLink:URL, 
        buttonText:"Ingresar a la cuenta",
        noteMessage:"No comparta esta contraseña"
    }
    
    return emailBase(content)
}

module.exports = { newUser }