const express = require("express")
const { getAllProducts, addProduct } = require("../controllers/productController")

const router = express.Router()

router.get("/add-product", addProduct)
router.get("/products", getAllProducts)

module.exports = router