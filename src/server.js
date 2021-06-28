require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT, () => {
  process.env.NODE_ENV === "test"
    ? ""
    : console.log(`API is running on PORT ${process.env.PORT}`);
});
