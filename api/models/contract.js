const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Contract", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    comments: {
      //para agregar aclaraciones si es necesario
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
