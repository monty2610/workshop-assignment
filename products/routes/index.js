const express = require("express");
const {
  createNewProduct,
  fetchAllProducts,
  fetchProductById,
} = require("../controllers");
const router = express.Router();

router.post("/products", createNewProduct);
router.get("/products", fetchAllProducts);
router.get("/products/:id", fetchProductById);

module.exports = router;
