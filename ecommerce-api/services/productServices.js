const getAllProductsService = () => {
  return "<p>Fetching all products</p>";
};

const getProductWithIdService = (id) => {
  return `<p>Fetching product with ID:${id}</p>`;
};

const addProductService = () => {
  return "<p>Adding a new product</p>";
};

module.exports = {
  getAllProductsService,
  getProductWithIdService,
  addProductService,
};
