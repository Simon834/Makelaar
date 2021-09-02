const {emailBase} = require('./emailBase')

function newUser(userName, userEmail){
    const content={
        title:"Bienvenido a Makelar",
        message:`Hola ${userName}, se ha registrado correctamente tu cuenta con el usuario ${userEmail}`,
        buttonLink:"http://localhost:3000/",
        buttonText:"Ingresar a la cuenta",
        noteMessage:"No comparta esta contraseña"
    }
    
    return emailBase(content)
}

module.exports = { newUser }