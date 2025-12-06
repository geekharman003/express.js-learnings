const response = require("../utils/response");

const getCartForUser = (req, res) => {
  const userId = req.params.userId;
  if (userId > 10) {
    response.sendErrorResponse(res, {
      message: "user not found",
      statusCode: 404,
    });
    return;
  }
  const data = `<p>Fetching cart for user with ID:${userId}</p>`;
  response.sendResponse(res, data);
};

const addProductToCart = (req, res) => {
  const userId = req.params.userId;

  if (userId > 100) {
    response.sendErrorResponse(res, {
      message: "userid is not valid",
      statusCode: 400,
    });
    return;
  }
  const data = `<p>Adding product to cart for user with ID:${userId}</p>`;
  response.sendResponse(res, data);
};

module.exports = { getCartForUser, addProductToCart };
