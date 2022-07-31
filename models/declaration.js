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
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    symptom: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pest_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_url: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    details: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    whether_to_solve: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'declaration',
    timestamps: false
  });
};
