const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('declaration', {
    id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    street_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    detailed_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    symptom: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pest_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'declaration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
