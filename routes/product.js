const express = require("express")
const { getAllProducts, addProduct, deleteProduct } = require("../controllers/productController")

const router = express.Router()

router.post("/add-product", addProduct)
router.get("/products", getAllProducts)
router.delete("/delete/:_id", deleteProduct)


module.exports = router