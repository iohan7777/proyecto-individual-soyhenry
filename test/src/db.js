require("dotenv").config();

const {  USER, PASSWORD, HOST, PORT, BDD } = process.env
const { Sequelize } = require("sequelize");
const CharacterFunction = require("./models/Character");



const database = new Sequelize(
    `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`
    ); // Example for postgres

CharacterFunction(database);


module.exports = database;