require("dotenv").config();
const express = require("express");
const { databse_connexion } = require("./backend/src/database");

const app = express();

PORT = process.env.PORT || 3002;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`server is runing  on port : ${PORT}`);
}); // this function help me  to run our server
/**
 * in order to connect my database , ill just call my function
 */
databse_connexion();
