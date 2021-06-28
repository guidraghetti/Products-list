const sequelize = require("sequelize");
const Product = require("../Model/product.model");
const Op = sequelize.Op;
const productService = {};

productService.findAll = async () => Product.findAll();
productService.findByParameter = async (field, value) =>
  Product.findAll({ where: { [field]: { [Op.substring]: value } } });
productService.findById = async (id) => Product.findByPk(id);
productService.update = async (updatedProduct, id) =>
  Product.update(updatedProduct, { where: { id } });
productService.saveProduct = async (product) => Product.create(product);

module.exports = productService;
