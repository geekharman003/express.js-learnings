const getCartForUser = (req, res) => {
  const userId = req.params.userId;
  res.send(`<p>Fetching cart for user with ID:${userId}</p>`);
};

const addProductToCart = (req, res) => {
  const userId = req.params.userId;
  res.send(`<p>Adding product to cart for user with ID:${userId}</p>`);
};

module.exports = { getCartForUser, addProductToCart };
