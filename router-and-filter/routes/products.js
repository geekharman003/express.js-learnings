const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

router.post("/", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

module.exports = router;
