const Product = require("../models/product.model");
module.exports = {
  createProduct: async (body) => {
    return await Product.create(body);
  },
  getProductById: async (productId) => {
    return await Product.findById(productId);
  },
  getAllProduct: async () => {
    return await Product.find();
  },
  updateProduct: async (id, body) => {
    const filter = { _id: id };
    const update = body;
    return await Product.findOneAndUpdate(filter, update);
  },
};
