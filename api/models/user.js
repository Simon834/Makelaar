const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      PrimaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido",
        },
      },
    },
    phone: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      validate: {
        len: [4, 20],
        msg: "La contraseña tiene que tener minimamente 6 caracteres",
      },
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
