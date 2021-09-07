const { DataTypes } = require("sequelize");

module.exports = (db) => {
    db.define("Property", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            // allowNull: false
        },
        area: { //en m2 ?
            type: DataTypes.STRING, // puede ser un float?
            // allowNull: false
        },
        rooms: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        bathrooms: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        type: {
            type: DataTypes.ENUM('Casa', 'Departamento', 'Local', 'Duplex', 'Terreno'),
            // allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING,
            // allowNull: true
        },
        province: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        streetNumber: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        cp: { //codigo postal
            type: DataTypes.STRING,
            // allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            // allowNull: true
        },
        firstImg: {
            type: DataTypes.STRING,
            // allowNull: true
        },
        photos: {
            type: DataTypes.ARRAY(DataTypes.STRING), //preguntar si esta bien
            // allowNull: true
        },
        status: {
            type: DataTypes.ENUM('activo', 'eliminado', 'pendiente'),
            // allowNull: false
        },
        
        transaction: {
            type: DataTypes.ENUM('Alquiler', 'Venta', 'Alquiler Temporario'),
            // allowNull: false
        },

        condition:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        premium:{
            type: DataTypes.BOOLEAN,
            // allowNull: false
        }


    })
}