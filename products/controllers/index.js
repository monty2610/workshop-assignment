const Product = require("../models");

const createNewProduct = async (req, res) => {
  const { name, category, price } = req.body;

  console.log("req body", name, category, price);
  try {
    // mongoose model
    const newProduct = new Product({
      name,
      category,
      price,
    });
    const product = await newProduct.save();
    res.status(201).send(product);
  } catch (e) {
    console.error("---Error creating product ----", e);
    res.status(500).send({ message: "Error creating new product" });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (e) {
    console.error("---Error fetching products ----", e);
    res.status(500).send({ message: "Error fetching products informations" });
  }
};

const fetchProductById = async (req, res) => {
  const id = req.params.id;
  console.log("fetching product for ", id);
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200).send(product);
  } catch (e) {
    console.error("---Error fetching product specific ----", e);
    res
      .status(500)
      .send({ message: "Error fetching specific product informations" });
  }
};
module.exports = { createNewProduct, fetchAllProducts, fetchProductById };
