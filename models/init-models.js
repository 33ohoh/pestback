var DataTypes = require("sequelize").DataTypes;
var _declaration = require("./declaration");
var _monthly_pest = require("./monthly_pest");
var _user = require("./user");

function initModels(sequelize) {
  var declaration = _declaration(sequelize, DataTypes);
  var monthly_pest = _monthly_pest(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    declaration,
    monthly_pest,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
