const express = require("express");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/products", getAllProducts);
router.delete("/delete/:_id", deleteProduct);
router.patch("/update/:_id", updateProduct);

module.exports = router;
