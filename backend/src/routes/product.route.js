const express = require("express");
const {
  makeProduct,
  updatedProduct,
  addShoSelling,
  findAllProduct,
  findProductById,
} = require("../controllers/product.controller");
const route = express.Router();
/**
 * @description create a product by a specific shop to be sell
 * @method post
 * @url /api/products/:id
 */
route.post("/:id", makeProduct);

/**
 * @description update an information from product table
 * @method  PUT
 * @url /api/product/
 */

/**
 * @description get a list of a specific  products
 * @method get
 * @url /api/shops/:id
 */
route.get("/:id", findProductById);

/**
 * @description get a list of all products
 * @method get
 * @url /api/shops/:id
 */
route.get("/", findAllProduct);

route.put("/:id", updatedProduct);
/**
 * @description add a shop to the list of shopp selling a specific product
 * @method post
 * @url /api/products/addshop/:id
 */
route.post("/addshop/:id", addShoSelling);
module.exports = route;
