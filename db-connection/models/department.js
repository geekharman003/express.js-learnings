const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const departmentModel = sequelize.define("department", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = departmentModel;
