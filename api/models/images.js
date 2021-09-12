const { DataTypes } = require("sequelize");

module.exports = (db) => {
  db.define("Image", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
