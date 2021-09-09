const { Property } = require("../db");
const { Op } = require('sequelize');

async function filterProperties(req, res, next){
    let { 
        name,
        search,
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
        price
    } = req.query;

    try{
        let filteredProperty = await Property.findAll({
            where: {
                [Op.and]: [
                    {
                        status: "activo",
                    },
                    {
                        type:type
                    },
                    {
                        condition: condition,
                    },
                    {
                        price: {[Op.between]: price}
                    },
                    {
                        bedrooms: bedrooms,
                    },
                    {
                        bathrooms: bathrooms,
                    },
                    {
                        [Op.or]: [
                            [   {
                                    name:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    type:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    city:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    province:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    description:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    transaction:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                                {
                                    condition:
                                    {   
                                        [Op.iLike]: `%${search}%`
                                    }
                                },
                            ]
                        ]
                    }
                ],
            }
        })
        res.send(filteredProperty);
    }catch(err){
        console.log(next(err))
    }
}

module.exports = { filterProperties };