const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const PORT = 3000;
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

app.use("/{*splat}", (req, res) => {
  res.status(404).send("<h1>404 - page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
