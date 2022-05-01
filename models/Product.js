// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      // https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
      // Validates that the value is a decimal
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
      // Validates that a value is numeric
      validate: {
        isNumeric: true,
      },
      // https://sequelize.org/docs/v6/core-concepts/model-basics/
      // Set a default value of 10
      defaultValue: 10,
    },
    category_id: {
      type: DataTypes.INTEGER,
      // references the CATEGORY model's ID
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
