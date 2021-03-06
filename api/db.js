require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const {
  DATABASE_URL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_HOST_PORT,
  DB_DATABASE,
  DB_DIALECT,
} = process.env;

const db = new Sequelize(
  DATABASE_URL ||
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_HOST_PORT}/${DB_DATABASE}`,
  {
    logging: false,
    native: false,
  }
);

db.authenticate();

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(db));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(db.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
db.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Property, Image, Contract, File, Payment } = db.models;

//Relaciones
//contract-property
Property.hasMany(Contract);
Contract.belongsTo(Property, { foreignKey: "PropertyId" });

//contract-user
User.hasMany(Contract);
Contract.belongsTo(User, { foreignKey: "UserId" });

//image-property
Property.hasMany(Image);
Image.belongsTo(Property, { foreignKey: "ImageId" });

//file-property
Contract.hasMany(File);
File.belongsTo(Contract);

//payment-user
User.hasMany(Payment);
Payment.belongsTo(User);

Contract.hasMany(Payment);
Payment.belongsTo(Contract, { foreignKey: "ContractId" });

module.exports = {
  db,
  ...db.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: db,
};
