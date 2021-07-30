const { DataTypes, Model } = require('sequelize');
const databaseCo = require('../db');

class Card extends Model {};

Card.init({
  content: DataTypes.TEXT,
  color: DataTypes.TEXT,
  position: DataTypes.INTEGER
}, {
  sequelize: databaseCo,
  tableName: "card"
});

module.exports = Card;