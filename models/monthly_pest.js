const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monthly_pest', {
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
    tableName: 'monthly_pest',
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
