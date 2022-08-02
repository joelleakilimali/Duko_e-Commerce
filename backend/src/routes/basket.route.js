const express = require("express");
const {
  makeBasket,
  findAllBasket,
  findBasketById,
  findBasketByOwnerId,
} = require("../controllers/basket.controller");
const route = express.Router();
/**
 * @description create abasket for specific user
 * @method post
 * @url /api/baskets
 */
route.post("/:id", makeBasket);

/**
 * @description get a list of all active basket
 * @method get
 * @url /api/basket
 */
route.get("/", findAllBasket);

/**
 * @description get a basket using its own id
 * @method get
 * @url /api/basket/:id
 */
route.get("/:id", findBasketById);

/**
 * @description get the shops of a specific owner
 * @method get
 * @url /api/shops/shoplist/:id
 */
route.get("/basketowner/:id", findBasketByOwnerId);
module.exports = route;
