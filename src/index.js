const express = require("express");
const connect = require("./config/db");
require("dotenv").config();



const app = express();

app.use(express.json());

let port = process.env.PORT || 1698;

app.listen(port, async () => {
  try {
    await connect();
    console.log("Server is running on port 1698");
  } catch (err) {
    console.log(err.message);
  }
});