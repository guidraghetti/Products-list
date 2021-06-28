require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: true,
  },
};
