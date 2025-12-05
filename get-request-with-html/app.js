const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const PORT = 3000;

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
