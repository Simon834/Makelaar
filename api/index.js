require("dotenv").config();
const { db } = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");
const users = require("./routes/users");
const PORT = process.env.PORT || 3010;

app.use(cors());

app.use(express.json());

app.use("/", routes);
app.use("/Users", users);

db.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
