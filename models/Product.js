const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "This field is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "This field is required"],
  },
});

module.exports = mongoose.model("Product", ProductSchema);
