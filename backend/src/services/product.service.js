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

  getshopSellingProduct: async (productID) => {
    return await Product.findOne({ id: productID }).populate({
      path: "shop",
      select: "name",
    });
  },
  getshopSellingProductByName: async (producName) => {
    const regex = new RegExp(producName, "i");
    return await Product.find({ name: { $regex: regex } }).populate("shop");
    // we will find shop that sell product that coontent the specif name
  },
  getshopsellingspecificProductname: async (producName) => {
    return await Product.find({ name: producName }).populate("shop");
    // we will find shop that sell only the specif name
  },
};
