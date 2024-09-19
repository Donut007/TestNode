'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TB_R_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TB_R_User.init({
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TB_R_User',
    tableName: 'TB_R_User', // Name of the existing table
    timestamps: false,  // Disable timestamps if not in the table
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
  });
  return TB_R_User;
};