const { readJson, saveJson } = require("../utils");
const { v4 } = require("uuid");

const getAllProducts = async (_, res) => {
  try {
    const products = readJson("products.json");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createProduct = async (req, res) => {
  try {
    const { name, title, description, image } = req.body;
    const products = readJson("products.json");
    const newProduct = {
      id: v4(),
      name,
      title,
      description,
      image,
      createdAt: new Date().toISOString(),
    };
    products.push(newProduct);
    saveJson("products.json", products);
    res.json(newProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { getAllProducts, createProduct };
