const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monthlypest', {
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crop_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    crop_type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    low_level: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    medium_level: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    high_level: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monthlypest',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "month" },
          { name: "crop_name" },
        ]
      },
    ]
  });
};
