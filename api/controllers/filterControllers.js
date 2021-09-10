const { Property } = require("../db");
const { Op } = require("sequelize");

async function filterProperties(req, res, next) {
  let {
    search,
    bedrooms,
    bathrooms,
    city,
    neighborhood,
    province,
    address,
    description,
    transaction,
    condition,
    price,
  } = req.query;
  console.log(req.query);
  let filterArray = [{ status: "activo" }];

  if (condition) filterArray.push({ condition: condition });
  if (price) filterArray.push({ price: price });
  if (bedrooms) filterArray.push({ rooms: bedrooms * 1 });
  if (bathrooms) filterArray.push({ bathrooms: bathrooms });
  if (search) {
    filterArray.push({
      [Op.or]: [
        {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          city: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          province: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          description: {
            [Op.iLike]: `%${search}%`,
          },
        },
        {
          condition: {
            [Op.iLike]: `%${search}%`,
          },
        },
      ],
    });
  }
  console.log("FILTER:", filterArray);
  try {
    const filterProperties = await Property.findAll({
      where: {
        [Op.and]: filterArray,
      },
    });
    console.log("FILERED FILTER", filterProperties);
    if (filterProperties.length > 0) {
      return res.json(filterProperties);
    } else {
      res.json([]);
    }
  } catch (err) {
    next(err);
  }
}

module.exports = { filterProperties };
