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
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
    area: {
      type: DataTypes.STRING, 
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.ENUM(
        "Casa",
        "Departamento",
        "Local",
        "Duplex",
        "Terreno"
      ),
    },
    city: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    province: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    cp: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    firstImg: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM("activo", "eliminado", "pendiente"),
    },

    transaction: {
      type: DataTypes.ENUM("Alquiler", "Venta", "Alquiler Temporario"),
    },

    condition: {
      type: DataTypes.STRING,
    },
    premium: {
      type: DataTypes.BOOLEAN,
    },
    price: {
      type: DataTypes.BIGINT,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
