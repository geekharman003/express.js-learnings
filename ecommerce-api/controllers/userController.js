const response = require("../utils/response");

const getAllUsers = (req, res) => {
  res.send("<p>Fetching all users</p>");
};

const getUserById = (req, res) => {
  const id = req.params.id;
  if (id > 10) {
    response.sendErrorResponse(res, {
      message: "User not found",
      statusCode: 404,
    });
    return;
  }

  const data = `<p>Fetching user with ID:${id}</p>`;
  response.sendResponse(res, data);
};

const addUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    response.sendErrorResponse(res, {
      message: "name and email are required",
      statusCode: 400,
    });
    return;
  }

  const data = "<p>Adding a new user</p>";
  response.sendResponse(res, data);
};

module.exports = { getAllUsers, getUserById, addUser };
