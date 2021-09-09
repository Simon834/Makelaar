var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
} = require("../controllers/propertiesController");

router.post("/addProperty", addNewProperty);
router.get("/allProperties", allProperties);

module.exports = router;