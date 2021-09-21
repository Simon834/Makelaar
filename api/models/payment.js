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
      // allowNull: false
    },
    moneyAmount: {
      type: DataTypes.FLOAT,
      // allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      // allowNull: false
    },
  });
};
