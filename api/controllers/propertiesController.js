const { Property, Image, Contract } = require("../db");
const axios = require("axios");
var mercadopago = require("mercadopago");
mercadopago.configure({
  access_token:
    "TEST-4999577064972768-083017-189cd12957cc9c05828173197e7cadb6-184968728",
});
//creacion propiedad

async function paymentProperty(req, res, next) {
  const { title, price, img, description } = req.query;
  try {
    let preference = {
      items: [
        {
          id: "item-ID-1234",
          title: "Mi producto",
          currency_id: "ARS",
          picture_url:
            "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          description: "Descripción del Item",
          category_id: "art",
          quantity: 1,
          unit_price: 1,
          reason: "Plan Gym Gold",
          auto_recurring: {
            frequency: "1",
            frequency_type: "months",
            transaction_amount: 1100,
            currency_id: "ARS",
            repetitions: 12,
            billing_day: 10,
            billing_day_proportional: false,
            free_trial: {
              frequency_type: "months",
              frequency: "1",
            },
          },
        },
      ],

      statement_descriptor: "MINEGOCIO",
      external_reference: "Reference_1234",
    };
    const respuesta = await mercadopago.preferences.create(preference);
    return res.send(respuesta.response.init_point);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function addNewProperty(req, res, next) {
  try {
    //photos, firstImg los recibe por body???
    const {
      name,
      area,
      rooms,
      bathrooms,
      type,
      city,
      neighborhood,
      province,
      address,
      cp,
      description,
      transaction,
      available,
      status,
      condition,
      photos,
      lat,
      lng,
      price,
      premium,
    } = req.body;
    // console.log(req.body);
    // let property= await Property.findOrCreate({where: {name,area,rooms, bathrooms,type, city,neighborhood, province, street, streetNumber, cp, description, transaction}});

    // if(propertyValidation){
    //     res.status(409).json({ msg: "Esta propieda ya fue creada" })
    // }else{

    let newProperty = await Property.create({
      name: name,
      area: area,
      rooms: rooms,
      bathrooms: bathrooms,
      type: type,
      city: city,
      neighborhood: neighborhood,
      province: province,
      address: address,
      cp: cp,
      description: description,
      transaction: transaction,
      condition: condition,
      available: available,
      status: status || "activo",
      lat: lat,
      lng: lng,
      price: price,
      premium: premium,
    });
    if (photos) {
      const image = photos?.map(
        async (photo) => await newProperty.createImage({ url: photo })
      );

      await Promise.all(image);
    }
    res.json({ newProperty });
  } catch (err) {
    console.log(next(err));
    return res.status(500).json(err);
  }
}

async function allProperties(req, res, next) {
  try {
    const properties = await Property.findAll({
      include: [{ model: Image }, { model: Contract }],
    });
    if (!properties.length) {
      return properties.data;
    } else {
      return res.json(properties);
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function idProperties(req, res, next) {
  let id = Number(req.params.id);
  console.log(id);
  try {
    const properties = await Property.findByPk(id, {
      include: [{ model: Image }, { model: Contract }],
    });
    if (properties) {
      return res.json(properties);
    } else {
      return res.json({ msg: "Id de propiedad inexistente" });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function updateProperty(req, res, next) {
  const {
    id,
    name,
    available,
    area,
    rooms,
    bathrooms,
    type,
    description,
    status,
    transaction,
    condition,
    premium,
    price,
  } = req.body;
  try {
    let property = await Property.findOne({ where: { id } });

    if (property) {
      property.name = name;
      property.available = available;
      property.area = area;
      property.rooms = rooms;
      property.bathrooms = bathrooms;
      property.type = type;
      property.description = description;
      property.status = status;
      property.transaction = transaction;
      property.condition = condition;
      property.premium = premium;
      property.price = price;

      await property.save();
      return res.json({ msg: "Tu propiedad ha sido nodificada" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  addNewProperty,
  allProperties,
  updateProperty,
  idProperties,
  paymentProperty,
};
