const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Payment", {
    idPay: {
      type: DataTypes.STRING,
      allowNull: false,
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
    date:{
      type: DataTypes.DATE,
      allowNull: false
  },
    
  });
};