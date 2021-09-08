require("dotenv").config();
const { db } = require("./db");

const app = require("./app");
const PORT = process.env.PORT || 3010;

db.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
