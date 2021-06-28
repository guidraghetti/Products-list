require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

const server = app.listen(process.env.PORT);

chai.use(chaiHttp);
const expect = chai.expect;

const product = {
  id: 21231222,
  image: "https://savegnago.vteximg.com.br/arquivos/ids/280435_2",
  name: "Farofa Pronta Angelica 500g Picante",
  categories: "Mercearia",
  price: 5.86,
  brand: "Fritz & Frida",
};

const editedProduct = {
  id: 70703323,
  price: 8.99,
};

const errorEditedProduct = {
  id: 12345678,
  brand: "Nike",
};

describe("Main test for API running", () => {
  after(async () => {
    server.close();
  });
  it("Should connect on PORT 3001", async () => {
    const res = await chai.request(app).get("/");
    expect(res.statusCode).to.equal(200);
  });

  it("Should post a product on the productList", async () => {
    const res = await chai.request(app).post("/product").send(product);
    expect(res.statusCode).to.equal(200);
    expect(res.body.id).to.be.above(0);
    expect(res.body.image).to.be.a("string");
    expect(res.body.categories).to.be.a("string");
    expect(res.body.brand).to.be.a("string");
    expect(res.body.price).to.be.above(0);
  });
  it("Should get an array of products", async () => {
    const res = await chai.request(app).get("/product/getAll");
    expect(res.statusCode).to.equal(200);
    res.body.forEach((product) => {
      expect(product.id).to.be.above(0);
      expect(product.image).to.be.a("string");
      expect(product.categories).to.be.a("string");
      expect(product.brand).to.be.a("string");
      expect(product.price).to.be.above(0);
    });
  });
  it("Should get products with filter brand ", async () => {
    const res = await chai
      .request(app)
      .get("/product")
      .query({ brand: "Faber" });
    expect(res.statusCode).to.equal(200);
    res.body.forEach((product) => {
      expect(product.id).to.be.above(0);
      expect(product.image).to.be.a("string");
      expect(product.categories).to.be.a("string");
      expect(product.brand).to.be.a("string");
      expect(product.price).to.be.above(0);
    });
  });
  it("Should return an empty array when filter dont match ", async () => {
    const res = await chai
      .request(app)
      .get("/product")
      .query({ name: "FDSFDSFDSFDSFDSFDSFDr" });
    expect(res.statusCode).to.equal(404);
    expect(res.body).to.have.property("error");
  });

  it("Should get products with filter categories ", async () => {
    const res = await chai
      .request(app)
      .get("/product")
      .query({ categories: "Bazar" });
    expect(res.statusCode).to.equal(200);
    res.body.forEach((product) => {
      expect(product.id).to.be.above(0);
      expect(product.image).to.be.a("string");
      expect(product.categories).to.be.a("string");
      expect(product.brand).to.be.a("string");
      expect(product.price).to.be.above(0);
    });
  });
  it("Should edit a product on the productList id = 70703323, price = 8.99", async () => {
    const res = await chai.request(app).put("/product").send(editedProduct);
    expect(res.statusCode).to.equal(200);
    expect(res.body.id).to.be.equal(70703323);
    expect(res.body.image).to.be.a("string");
    expect(res.body.categories).to.be.a("string");
    expect(res.body.brand).to.be.a("string");
    expect(res.body.price).to.be.equal(8.99);
  });
  it("Should throw error if the values to edit the product are the same in db, id = 70703323, price = 8.99", async () => {
    const res = await chai.request(app).put("/product").send(editedProduct);
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.be.have.property("error");
    expect(res.body.error).to.equal("Os valores são os mesmos armazenados");
  });
  it("Should throw error if product to be edited doesn't exist ", async () => {
    const res = await chai
      .request(app)
      .put("/product")
      .send(errorEditedProduct);
    expect(res.statusCode).to.equal(404);
    expect(res.body).to.be.have.property("error");
    expect(res.body.error).to.equal("Produto inexistente!");
  });
});
