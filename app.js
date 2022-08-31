const express = require("express");
const connectToDB = require("./db/connect");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const router = require("./routes/products");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/v1/products", router);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, console.log("Server started"));
  } catch (error) {
    console.log(error);
  }
};

start();
