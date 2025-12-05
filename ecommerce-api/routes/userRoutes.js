const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<p>Fetching all users</p>");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<p>Fetching user with ID:${id}</p>`);
});

router.post("/", (req, res) => {
  res.send("<p>Adding a new user</p>");
});

module.exports = router;
