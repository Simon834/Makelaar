const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Payment", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    aproved: {
      type: DataTypes.BOOLEAN,
    },
    moneyAmount: {
      type: DataTypes.FLOAT,
    },
    date: {
      type: DataTypes.DATE,
    },
  });
};
