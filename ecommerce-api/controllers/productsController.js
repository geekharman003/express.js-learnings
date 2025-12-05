const getAllProducts = (req, res) => {
  res.send("<p>Fetching all products</p>");
};

const getProductWithId = (req, res) => {
  const id = req.params.id;
  res.send(`<p>Fetching product with ID:${id}</p>`);
};

const addProduct = (req, res) => {
  res.send("<p>Adding a new product</p>");
};

module.exports = { getAllProducts, getProductWithId, addProduct };
