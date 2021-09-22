const { emailBase } = require("./emailBase");

const URL = process.env.FRONT_URL || "http://localhost:3000"

function confirmContract(name, UserId, idContrato) {
  const content = {
    title: "Liquidación de contrato",
    message: `Hola ${name}, ya tiene a su disposición la liquidación de su contrato de alquiler, ingrese con su usuario a nuestra web para efectuar el pago`,
    buttonLink: `${URL}/user/${UserId}/editcontract/${idContrato}`,
    buttonText: "Ir a la web", 
    noteMessage: "Se puede comunicar con nosotros por cualquier inquietud",
  };

  return emailBase(content);
}

module.exports = { confirmContract };
