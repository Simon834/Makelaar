const {emailBase} = require('./emailBase')
const URL = process.env.FRONT_URL || "http://localhost:3000"

function recoveryPass(newPass){
    const content={
        title:"Recuperación de contraseña",
        message:`Ingrese a su cuenta con la siguiente contraseña para poder restaurarla ${newPass || "contraseña nueva"}`,
        buttonLink:URL, 
        buttonText:"Ir a la web",
        noteMessage:"No comparta esta contraseña"
    }
    
    return emailBase(content)
}

module.exports = { recoveryPass }