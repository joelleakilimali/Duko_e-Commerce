const express = require("express");
const {
  makeProduct,
  updatedProduct,
  findAllProduct,
  findProductById,
  findShopSellingProduct,
  findShopSellingProductByName,
  changeStatusProduct,
} = require("../controllers/product.controller");
const route = express.Router();
/**
 * @description create a product by a specific shop to be sell
 * @method post
 * @url /api/products/:id
 */
route.post("/create/:id", makeProduct);

/**
 * @description update an information from product table
 * @method  PUT
 * @url /api/product/
 */
route.put("/:id", updatedProduct);

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

/**
 * @description get shop that is selling a specific product uding the productId
 * @method get
 * @url /api/products/shops/
 */
route.get("/shops/:id", findShopSellingProduct);

/**
 * @description get shop that is selling a specific product uding the producName
 * @method post
 * @url /api/products/shopsbyname/
 */
route.post("/shopsbyname", findShopSellingProductByName);

/**
 * @description set the status of a product OUT_OF_STOCK
 * @method PUT
 * @url /api/product/status/:id
 */
route.put("/status/:id", changeStatusProduct);

module.exports = route;
