const express = require("express");
const routes = require("./Route/index");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

routes(app);

module.exports = app;
