const Product = require("../models/Product");

const getProducts = async (req, res, next) => {
  const product = await Product.find({});
  res.status(200).json({ status: "success", data: product });
};

const getProduct = async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  res.status(200).json({ status: "success", data: product });
};

const addProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({ status: "success", data: product });
};

const updateProduct = async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
  });
  res.status(200).json({ status: "success", data: product });
};

const deleteProduct = async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });
  res.status(200).json({ status: "success", data: product });
};

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
