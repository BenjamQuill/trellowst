const { DataTypes, Model } = require('sequelize');
const databaseCo = require('../db');

class List extends Model { };

List.init({
  name: DataTypes.TEXT,
  position: DataTypes.INTEGER
}, {
  sequelize: databaseCo,
  tableName: "list"
});

module.exports = List;