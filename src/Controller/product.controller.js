const productService = require("../Service/product.service");

const productController = {};

productController.getAllProducts = async (req, res) => {
  try {
    const products = await productService.findAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An internal error ocurred!" });
  }
};

productController.getByParameter = async (req, res) => {
  const { categories, brand, name } = req.query;
  let field, value;
  if (categories !== undefined) {
    field = "categories";
    value = categories;
  } else if (brand !== undefined) {
    (field = "brand"), (value = brand);
  } else if (name !== undefined) {
    (field = "name"), (value = name);
  }
  try {
    const products = await productService.findByParameter(field, value);
    if (products.length === 0) {
      return res
        .status(404)
        .json({ error: `Nenhum produto com ${field} ${value} foi encontrado!` });
    }
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An internal error ocurred!" });
  }
};

productController.updateProduct = async (req, res) => {
  const { brand, id, price, category, name, image } = req.body;
  try {
    const product = await productService.findById(id);
    if (product === null) {
      return res.status(404).json({ error: "Produto inexistente!" });
    }
    const updatedProduct = {};
    brand !== undefined && (updatedProduct.brand = brand);
    price !== undefined && (updatedProduct.price = price);
    category !== undefined && (updatedProduct.category = category);
    name !== undefined && (updatedProduct.name = name);
    image !== undefined && (updatedProduct.image = image);
    const updated = await productService.update(updatedProduct, id);
    if (updated != 1) {
      return res
        .status(400)
        .json({ error: "Os valores são os mesmos armazenados" });
    }
    const productUpdated = await productService.findById(id);
    return res.json(productUpdated);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An internal error ocurred!" });
  }
};

productController.postProduct = async (req, res) => {
  const receivedProduct = req.body;
  try {
    const product = await productService.saveProduct(receivedProduct);
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An internal error ocurred!" });
  }
};

module.exports = productController;
