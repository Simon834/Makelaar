const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("File", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
