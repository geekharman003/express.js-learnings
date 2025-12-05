const path = require("path");
const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

module.exports = getAllProducts;
