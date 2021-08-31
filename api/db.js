require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
    DATABASE_URL,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_HOST_PORT,
    DB_DATABASE,
    DB_DIALECT,
} = process.env;

const db = new Sequelize(DATABASE_URL || `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_HOST_PORT}/${DB_DATABASE}`, {
    logging: false,
    native: false,
});

db.authenticate().then(() => console.log('conectado')).catch(e => console.log(e))

module.exports = {
    db,
}