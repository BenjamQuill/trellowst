const {DataTypes, Model} = require('sequelize');
const databaseCo = require('../databaseCo');

class Tag extends Model{};

Tag.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
  }, {
    sequelize: databaseCo,
    tableName: "tag"
  });
  
  module.exports = Tag;
