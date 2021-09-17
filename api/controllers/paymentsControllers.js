const axios = require("axios");
const {PROD_ACCESS_TOKEN} = process.env;
const {Notifications, Payment, User, Contract} = require('../db')

//SDK mercadopago
var mercadopago = require("mercadopago");

//Agrega credenciales
mercadopago.configure({access_token:PROD_ACCESS_TOKEN//token del vendedor (es ficticio)
});

async function getAllPayments(req,res, next){
  try{

    const allPayments = await Payment.findAll({
      include:[{model: User},{model:Contract}]
    })
   return res.json(allPayments)
  }catch(err){console.log(err); res.json(err)}
}


async function createPreference(req, res, next) {
  const { title, price, description, contractId } = req.body;
  console.log("BODY", req.body)
  try {
    //"orden de compra"
    let preference = {
      items: [
        {
          id: contractId, //id contrato
          title: title, //de la propiedad
          currency_id: "ARS", //
          picture_url:
            "https://res.cloudinary.com/makelaar/image/upload/v1631883556/logo-color_bzxf50.png", //logo makelar
          description: description , //
          category_id: "others",
          quantity: 1,
          unit_price: parseInt(price),

          // reason: "Plan Gym Gold",
          // auto_recurring: {
          //   frequency: "1",
          //   frequency_type: "months",
          //   transaction_amount: 1100,
          //   currency_id: "ARS",
          //   repetitions: 12,
          //   billing_day: 10,
          //   billing_day_proportional: false,
          //   free_trial: {
          //     frequency_type: "months",
          //     frequency: "1",
          //   },
         // },

          //devuelven el estado de la compra
          back_urls: {
            success: 'http://localhost:3000/',
            failure: 'http://localhost:3000/',
            pending: 'http://localhost:3000',
          }
        },
      ],

      statement_descriptor: "MINEGOCIO",
      external_reference: "Reference_1234",
      concept_id:contractId,
    };
    const respuesta = await mercadopago.preferences.create(preference);
     console.log(respuesta.response.init_point)
     return res.send(respuesta.response.init_point); //se coloca el init point de produccion (del vendedor)
  } catch (err) {
    console.log(err);
    next(err);
  }
}

//notificaciones
async function newNotification(req, res, next){
  const {id} = req.query;
  const {topic, resource} = req.body;
try{

  if(topic === "payment"){
    const notifications = await Notifications.create({
      idNot:id,
      topic: topic,
      resource: `https://api.mercadopago.com/v1/payments/${id}`
    })

    //consultamos datos del pago
      let references = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`,{
      headers: { Authorization: `Bearer ${PROD_ACCESS_TOKEN}`}})

    references = references.data
    // console.log("RTA", references)

try{
  // console.log("REEEEEEEEEEEEEE", references.payer.email)
  let paymentUser = await User.findOne({
    where: {
        email: references.payer.email
    }
})

  let newPay = {
    idPay: references.order.id,
   status:references.status,
   userEmail: references.payer.email,
   amount: references.additional_info.items[0].unit_price,
   ContractId: parseInt(references.additional_info.items[0].id)
  
  }
  // console.log("ADITIONAAAAAAAL",references.additional_info.items[0].id )
  // console.log("NEWPAAAAAAAAAAAAY", newPay)

  await paymentUser.createPayment(newPay)
  return res.json(newPay)
}catch(err){console.log(err); res.json(err)}
  }else{
    return res.json({msg: "La informacion recibida no corresponde a un pago"})
  }
}catch(err){
  console.log(err);
  next(err)}

}

module.exports={
    createPreference,
    newNotification, 
    getAllPayments
}