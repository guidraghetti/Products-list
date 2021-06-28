const router = require("express").Router();
const productController = require("../Controller/product.controller");

router.get("/getAll", productController.getAllProducts);
router.get("", productController.getByParameter);
router.put("", productController.updateProduct);
router.post("", productController.postProduct);

module.exports = router;
