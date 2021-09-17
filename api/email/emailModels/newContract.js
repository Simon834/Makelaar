const { emailBase } = require("./emailBase");

function newContractEmail(name, UserId, idContrato) {
  const content = {
    title: "Nuevo contrato",
    message: `Makeelar tiene un nuevo contrato titulado ${name} disponible para que lo apruebes. Ingresa para confirmarlo`,
    buttonLink: `http://localhost:3000/user/${UserId}/editcontract/${idContrato}`,
    buttonText: "Ir al contrato",
    noteMessage: "Por favor revise y apruebe los cambios",
  };

  return emailBase(content);
}

module.exports = { newContractEmail };
