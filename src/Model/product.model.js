const sequelize = require("../Database/db");
const Sequelize = require("sequelize").Sequelize;

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    categories: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,

      allowNull: false,
    },
    brand: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "Products", timestamps: false }
);
(async () => {})();

module.exports = Product;
