const express = require("express");
const router = express.Router();

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`<p>Fetching cart for user with ID:${userId}</p>`);
});

router.post("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`<p>Adding product to cart for user with ID:${userId}</p>`);
});

module.exports = router;
