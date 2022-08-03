const { json } = require("express");
const { createBasket } = require("../services/basket.service");
const { getshopSellingProduct } = require("../services/product.service");
const {
  createShop,
  getAllshop,
  getShopById,
  getShopByOwnerId,
  checkExistenceShop,
  updateShop,
} = require("../services/shop.service");
const { getUserById } = require("../services/user.service");
const { updatedProduct } = require("./product.controller");

module.exports = {
  makeShop: async (req, res) => {
    const userId = req.params.id;
    const name = req.body.name;
    const check = await getUserById(userId);
    const checkShop = await checkExistenceShop(name);

    if (!check) {
      return res.status(400).json({
        message: "You can not create a shop without having an account",
      });
    }
    if (checkShop) {
      return res.status(404).json({
        message: "You can not create a shop with a same name ",
      });
    }
    if (!name || !req.body) {
      return res.status(400).json({
        message: "All information are required",
      });
    }
    const shop = await createShop({ ...req.body, owner: userId });
    await createBasket(userId);
    return res.status(200).json({ data: shop });
  },
  findAllShop: async (req, res) => {
    const shopList = await getAllshop();
    return res.status(200).json({ data: shopList });
  },
  findShopById: async (req, res) => {
    const shopId = req.params.id;
    const shop = await getShopById(shopId);
    if (!shop) {
      return res.status(400).json({ data: "shop not dound" });
    }

    return res.status(200).json({ data: shop });
  },
  findShopByOwnerId: async (req, res) => {
    const ownerId = req.params.id;
    const shopList = await getShopByOwnerId(ownerId);
    const check = await getUserById(ownerId);
    if (!check) {
      return res.status(404).json({ message: "this owner doenst exist " });
    }
    if (!shopList) {
      return res.status(404).json({ data: "this owner doesnt have any shop" });
    }
    return res.status(200).json({ data: shopList });
  },
  updatedShop: async (req, res) => {
    const body = req.body;
    const shopId = req.params.id;
    const shop = await getShopById(shopId);
    if (!shop) {
      console.log(shop);
      return res.status(400).json({ data: "shop not dound" });
    }
    const updatedinfo = await updateShop(shopId, body);
    return res.status(200).json({ data: updatedinfo });
  },
  closeShop: async (req, res) => {
    const shopId = req.params.id;
    const shop = await getShopById(shopId);
    if (!shop) {
      return res.status(400).json({ data: "shop not dound" });
    }
    const closeShop = await updateShop(shopId, { status: 0 });
    const newshop = await getShopById(shopId);
    return res.status(200).json({ data: newshop });
  },
};
