const { Property, Image, Contract } = require("../db");
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
    type
  } = req.query;

  let filterArray = [{ status: "activo" }];
  if (type) filterArray.push({ type: type });
  if (transaction) filterArray.push({ transaction: transaction });
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
 
  try {
    const filterProperties = await Property.findAll({
      where: {
        [Op.and]: filterArray,
      },
      include: [{ model: Image }, { model: Contract }],
    });
    
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
