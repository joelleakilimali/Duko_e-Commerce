const Shop = require("../models/shop.model");

module.exports = {
  createShop: async (body) => {
    return Shop.create(body);
  },
  getAllshop: async () => {
    return Shop.find();
  },
  getShopById: async (shopId) => {
    return Shop.findById(shopId);
  },
  getShopByOwnerId: async (ownerId) => {
    return Shop.find({ owner: ownerId });
  },
  updateShop: async (id, body) => {
    const filter = { _id: id };
    const update = body;
    return await Shop.findOneAndUpdate(filter, update);
  },
  checkExistenceShop: async (shopName) => {
    return Shop.findOne({ name: shopName });
  },
  checkExistenceShopById: async (shopId) => {
    return Shop.findOne({ id: shopId });
  },
};
