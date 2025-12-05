const productServices = require("../services/productServices");

const getAllProducts = (req, res) => {
  const output = productServices.getAllProductsService();
  res.send(output);
};

const getProductWithId = (req, res) => {
  const output = productServices.getProductWithIdService(req.params.id);
  res.send(output);
};

const addProduct = (req, res) => {
  const output = productServices.addProductService();
  res.send(output);
};

module.exports = { getAllProducts, getProductWithId, addProduct };
