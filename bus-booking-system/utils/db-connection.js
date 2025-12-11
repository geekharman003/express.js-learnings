const Sequelize = require("sequelize");

const sequelize = new Sequelize("busbooking", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (e) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
