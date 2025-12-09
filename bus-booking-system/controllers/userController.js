const db = require("../utils/db-connection");

const getAllUsers = (req, res) => {
  const fetchQuery = `SELECT name FROM users`;
  db.execute(fetchQuery, (err, result) => {
    try {
      if (err) {
        res.status(500).send("error fetching users");
        throw new Error(err);
      }

      res.status(200).send(result);
    } catch (e) {
      console.log(e);
    }
  });
};

const addNewUser = (req, res) => {
  const { name, email } = req.body;

  const insertQuery = `INSERT INTO users (name,email)
  VALUES (?,?)`;

  db.execute(insertQuery, [name, email], (err) => {
    try {
      if (err) {
        res.status(500).send("name and email is required");
        db.end();
        throw new Error(err);
      }

      res.status(200).send(`user with name ${name} and email ${email} added`);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = { getAllUsers, addNewUser };
