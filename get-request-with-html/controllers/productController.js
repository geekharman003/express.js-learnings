const path = require("path");
const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "products.html"));
};

const addNewProduct = (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
};

module.exports = { getAllProducts, addNewProduct };
