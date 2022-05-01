const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      // integer
      type: DataTypes.INTEGER,
      // doesn't allow null values
      allowNull: false,
      // set as primary key
      primaryKey: true,
      // used auto increment
      autoIncrement: true,
    },
    category_name: {
      // string
      type: DataTypes.STRING,
      // doesn't allow null values
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
