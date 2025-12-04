const express = require("express");
const app = express();
const PORT = 4000;

//middlewares for logging
app.get("/products", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

app.post("/products", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

app.get("/categories", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

app.post("/categories", (req, res) => {
  const method = req.method;
  const endpoint = req.url;

  res.send(`${method} request made to ${endpoint}`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
