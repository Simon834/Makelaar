const { emailBase } = require("./emailBase");

const URL = process.env.FRONT_URL || "http://localhost:3000"

function confirmContract(name, UserId, idContrato) {
  const content = {
    title: "Modificaciones en el contrato",
    message: `Se han realizado modificaciones dentro del contrato titulado ${name}. Por favor ingrese al link para confirmar o rechazar los respectivos cambios`,
    buttonLink: `${URL}/user/${UserId}/editcontract/${idContrato}`,
    buttonText: "Ir a la web", 
    noteMessage: "Por favor revise y apruebe los cambios",
  };

  return emailBase(content);
}

module.exports = { confirmContract };
