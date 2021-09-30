const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Image", {
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
