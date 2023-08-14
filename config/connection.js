// config/connection.js
const { Sequelize } = require('sequelize');
require('dotenv').config();



// Set up the database connection
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'process.env.DB_HOST', // Change this to your database host
  dialect: 'mysql', // Change this if you're using a different database
  port: 3306, // Change this to your database port
});

module.exports = sequelize;