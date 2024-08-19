const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../controllers/product.controller");

const productRouter = Router();
productRouter.get("/", getAllProducts).post("/", createProduct);
module.exports = { productRouter };
