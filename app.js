require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const Port = process.env.PORT || 3000;
const Hostname = process.env.HOSTNAME;

const db = require("./db/dbConnection");
const routes = require("./routes");

app.use(bodyParser.json());

app.use(routes);

db.then(() => {
  app.listen(Port, Hostname, () => {
    console.log(`Server running on port ${Port}`);
  });
}).catch((err) => {
  console.log(err);
});
