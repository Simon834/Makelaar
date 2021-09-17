const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Payment", {
    idPay: {
      type: DataTypes.BIGINT,
      allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
  });
};