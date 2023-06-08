const mongoose = require("mongoose");

const mongodb_url = process.env.MONGODB_URL;

const dbConnection = mongoose
  .connect(mongodb_url)
  .then((result) => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = dbConnection;