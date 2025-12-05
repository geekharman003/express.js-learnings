const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
