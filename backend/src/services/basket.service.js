const Basket = require("../models/basket.model.js");

module.exports = {
  createBasket: async (userid) => {
    return Basket.create({ user: userid });
  },
  getAllBasket: async () => {
    return Basket.find();
  },
  getBasketById: async (basketId) => {
    return Basket.findById(basketId);
  },
  getBasketByOwnerId: async (ownerId) => {
    return Basket.find({ user: ownerId });
  },

  updateBasket: async (id, body) => {
    const filter = { _id: id };
    const update = body;
    return await Basket.findOneAndUpdate(filter, update);
  },
};
