require("dotenv").config();
const db = require("sequelize");
const { PASSWORD, DATABASE } = process.env;
const Sequelize = db.Sequelize;



const sequelize = new Sequelize(DATABASE, "root", PASSWORD, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});
module.exports = sequelize;
