'use strict';
module.exports = function(sequelize, DataTypes) {
  var taco = sequelize.define('taco', {
    name: DataTypes.STRING,
    amount: {
      type: DataTypes.INTEGER,
      validate:{
        min: 0,
        max: 100
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return taco;
};