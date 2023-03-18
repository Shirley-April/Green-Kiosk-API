const { Product } = require("../models/index");

module.exports = {
  // getAllProducts(req, res) {
  //   Product.find({})
  //     .then((product) => res.json(product))
  //     .catch((err) => res.status(500).json(err));
  // },
  async getAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);

      // .exec(function (err, products) {
      //   if (err) {
      //     res.status(500).send({ message: err });
      //   }
      //   res.status(200).json(products);
      // });
    } catch (err) {}
  },
  async addProduct(req, res) {
    try {
      Product.insertMany([
        {
          name: "Lemon",
          description: "Bitter lemmon",
          price: "150",
          image: "lemon image",
          category: "fruits",
          availability: "In-stock",
        },
        {
          name: "Mango",
          description: "Mango Mango",
          price: "200",
          image: "mango image",
          category: "fruits",
          availability: "Out-Of-stock",
        },
      ]);
      res.status(200).json({ message: "Product added successfuly" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
