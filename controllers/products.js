const { createErrorHandler } = require("../errors/custom-error-handler");
const asyncWrapper = require("../middlewares/async-wrapper");
const Product = require("../models/Product");

const getProducts = asyncWrapper(async (req, res, next) => {
  const product = await Product.find({});
  res.status(200).json({ status: true, data: product });
});

const getProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  product
    ? res.status(200).json({ status: true, data: product })
    : next(createErrorHandler(404, `Product with id ${productID} not found`));
});

const addProduct = asyncWrapper(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({ status: true, data: product });
});

const updateProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
  });
  product
    ? res.status(200).json({ status: true, data: product })
    : next(createErrorHandler(404, `Product with id ${productID} not found`));
});

const deleteProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });
  product
    ? res.status(200).json({ status: true, data: product })
    : next(createErrorHandler(404, `Product with id ${productID} not found`));
});

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
