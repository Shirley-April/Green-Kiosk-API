const { Product } = require("../models/index");

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {}
  },
  async addProduct(req, res) {
    try {
      Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        availability: req.body.availability,
      });

      res.status(200).json({ message: "Product added successfuly" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteProduct(req, res) {
    try {
      await Product.deleteOne({ _id: req.params._id });
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error deleting product" });
    }
  },
};
