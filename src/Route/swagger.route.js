const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const router = require("express").Router();

const swagger = YAML.load("./swagger.yaml");
router.use("", swaggerUI.serve);
router.get("", swaggerUI.setup(swagger));

module.exports = router;
