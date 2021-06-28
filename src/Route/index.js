const rootRouter = require("express").Router();

const swaggerRouter = require("./swagger.route");
const productRoute = require("./product.route");

rootRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
  });
});

module.exports = (app) => {
  app.use(rootRouter);
  app.use("/swagger", swaggerRouter);
  app.use("/product", productRoute);
};
