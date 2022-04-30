require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : // Putting in empty string for password, because I have not set one up.
    // User will have to but back in the 'process.env.PASSWORD'
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
