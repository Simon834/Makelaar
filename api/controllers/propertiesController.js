const { Property, Image, Contract } = require("../db");

//creacion propiedad
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
    } = req.body;
    console.log(req.body);
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
      status: status,
      lat: lat,
      lng: lng,
    });

    const image = photos.map(
      async (photo) => await newProperty.createImage({ url: photo })
    );

    await Promise.all(image);
    res.json({ newProperty });
    //}
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
  let id = req.params.id * 1;
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

module.exports = { addNewProperty, allProperties, idProperties };
