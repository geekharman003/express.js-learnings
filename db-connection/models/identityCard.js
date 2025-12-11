const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const identityCardModel = sequelize.define("identitycard", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports = identityCardModel;
