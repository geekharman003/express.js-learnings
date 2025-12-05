const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<p>Fetching all products</p>");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`<p>Fetching product with ID:${id}</p>`);
});

router.post("/", (req, res) => {
  res.send("<p>Adding a new product</p>");
});

module.exports = router;
