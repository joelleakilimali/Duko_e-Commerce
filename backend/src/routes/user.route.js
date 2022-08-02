//i will require express  so we can freely use our routes

const express = require("express");
const route = express.Router();
const {
  makeUser,
  findAllUser,
  findUserById,
  updatedUser,
  closeUser,
} = require("../controllers/user.controller");

/**
 * @description create user
 * @method POST
 * @url /api/users/
 */

route.post("/", makeUser);

/**
 * @description getting all users
 * @method GET
 * @url /api/users/
 */

route.get("/", findAllUser);

/**
 * @description find a user using the id
 * @method get
 * @url /api/users/
 */
route.get("/:id", findUserById);

/**
 * @description update an information from users table
 * @method  PUT
 * @url /api/users/
 */
route.put("/:id", updatedUser);

/**
 * @description close an account
 * @method  PUT
 * @url /api/users/close
 */
route.put("/close/:id", closeUser);

module.exports = route;
