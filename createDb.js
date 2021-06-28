require("dotenv").config();
const mysql = require("mysql2/promise");
mysql
  .createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: process.env.PASSWORD,
  })
  .then((connection) => {
    connection
      .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE};`)
      .then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
      });
  });
