require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { databse_connexion } = require("./backend/src/database");

const app = express();

PORT = process.env.PORT || 3002;
console.log(PORT);

/**
 * this function help me  to run our server
 */
app.listen(PORT, () => {
  console.log(`server is runing  on port : ${PORT}`);
});

//in order to connect my database , ill just call my function
databse_connexion();

// im gonna create  variables for each of our routes so that the 'app' can determines the initial path for  them

const UserRoute = require("./backend/src/routes/user.route");
const ShopRoute = require("./backend/src/routes/shop.route");
const productRoute = require("./backend/src/routes/user.route.js");
const basketRoute = require("./backend/src/routes/basket.route.js");

//creation of our initial route using the function 'use'

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use("/api/users", UserRoute);
app.use("/api/shops", ShopRoute);
app.use("/api/baskets", basketRoute);
