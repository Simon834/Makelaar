const { Property } = require("../db");

//creacion propiedad
async function addNewProperty(req,res,next){
    try{
        //photos, firstImg los recibe por body???
        const {name,area, rooms, bathrooms,type, city,neighborhood, province, street, streetNumber, cp, description, transaction, available, status,condition }= req.body

            
            let newProperty= await Property.create({
                name: name,
                area: area,
                rooms: rooms,
                bathrooms: bathrooms,
                type: type,
                city: city,
                neighborhood: neighborhood,
                province: province,
                street: street,
                streetNumber: streetNumber,
                cp: cp,
                description:description,
                transaction: transaction,
                condition: condition,
                available: available,
                status: status

             })
            res.json({newProperty})
        //}

    }catch(err){
        console.log(next(err))
        return res.status(500).json(err)
    }
} 

module.exports = {addNewProperty}