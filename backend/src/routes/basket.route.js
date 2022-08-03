const express = require("express");
const {
  makeBasket,
  findAllBasket,
  findBasketById,
  findBasketByOwnerId,
  updatedBasket,
  addProduct,
  removeProduct,
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

/**
 * @description update an information from product table
 * @method  PUT
 * @url /api/basket/:id
 */
route.put("/:id", updatedBasket);
/**
 * @description update an information from product table
 * @method  PUT
 * @url /api/basket/addproduct/:id
 */
route.put("/addproduct/:id", addProduct);
/**
 * @description remove a product from the basket
 * @method  PUT
 * @url /api/basket/removeproduct/:id
 */
route.put("/removeproduct/:id", removeProduct);

module.exports = route;
