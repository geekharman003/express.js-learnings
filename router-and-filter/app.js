const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");
const PORT = 4000;

//middlewares for logging
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
