const getAllUsers = (req, res) => {
  res.send("<p>Fetching all users</p>");
};

const getUserById = (req, res) => {
  const id = req.params.id;
  res.send(`<p>Fetching user with ID:${id}</p>`);
};

const addUser = (req, res) => {
  res.send("<p>Adding a new user</p>");
};

module.exports = { getAllUsers, getUserById, addUser };
