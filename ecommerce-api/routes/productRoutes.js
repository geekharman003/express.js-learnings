const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductWithId);

router.post("/", productController.addProduct);

module.exports = router;
