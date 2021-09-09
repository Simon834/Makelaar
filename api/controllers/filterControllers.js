const { Property } = require("../db");
const { Op } = require('sequelize');

async function filterProperties(req, res, next){
    let { name,
      area,
      rooms,
      bathrooms,
      types,
      city,
      neighborhood,
      province,
      street,
      description,
      transaction,
      condition,
    } = req.query
    let filteredProperty = await Property.findAll({
        where: {
            [Op.and]: [
                {
                    status: "activo",
                },
                {
                    area: {area}
                }
            ]
        }
    })
}