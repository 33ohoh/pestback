var DataTypes = require("sequelize").DataTypes;
var _declaration = require("./declaration");
var _monthlypest = require("./monthlypest");
var _user = require("./user");

function initModels(sequelize) {
  var declaration = _declaration(sequelize, DataTypes);
  var monthlypest = _monthlypest(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    declaration,
    monthlypest,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
