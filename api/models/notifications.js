const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Notifications", {
    idNot: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    resource: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topic:{
        type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
