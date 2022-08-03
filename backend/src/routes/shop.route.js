const express = require("express");
const {
  makeShop,
  findAllShop,
  findShopById,
  findShopByOwnerId,
  updatedShop,
  closeShop,
  findShopSellingProduct,
} = require("../controllers/shop.controller");
const route = express.Router();

/**
 * @description create a shop for specific user
 * @method post
 * @url /api/shops/:id
 */
route.post("/:id", makeShop);

/**
 * @description get a list of all shops
 * @method get
 * @url /api/shops/:id
 */
route.get("/", findAllShop);

/**
 * @description get a shop using its own id
 * @method get
 * @url /api/shops/:id
 */
route.get("/:id", findShopById);

/**
 * @description update information of a shop using it own Id
 * @method put
 * @url /api/shops/:id
 */
route.put("/:id", updatedShop);

/**
 * @description get the shops of a specific owner
 * @method get
 * @url /api/shops/shoplist/:id
 */
route.get("/shoplist/:id", findShopByOwnerId);

/**
 * @description close a shop
 * @method get
 * @url /api/shops/shoplist/:id
 */
route.put("/closeshop/:id", closeShop);

module.exports = route;
