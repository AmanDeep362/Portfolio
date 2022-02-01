const express = require("express");
const dotenv = require("dotenv");
const { Mongoose } = require("mongoose");
dotenv.config();
const app = express();
const Port =  5000;
app.use(express.json())
app.use(require("./Routes/Hireme"));



app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});

