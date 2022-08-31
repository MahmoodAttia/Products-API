const getProducts = (req, res, next) => {
  res.status(200).json({ status: "success", msg: "Get Products" });
};

const getProduct = (req, res, next) => {
  res.status(200).json({ status: "success", msg: "Get Product" });
};
const updateProduct = (req, res, next) => {
  res.status(200).json({ status: "success", msg: "Update Product" });
};

const deleteProduct = (req, res, next) => {
  res.status(200).json({ status: "success", msg: "Delete Product" });
};
const addProduct = (req, res, next) => {
  res.status(200).json({ status: "success", msg: "Add Product" });
};

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
