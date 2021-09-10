var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
} = require("../controllers/propertiesController");
const { filterProperties } = require("../controllers/filterControllers")

router.post("/addProperty", addNewProperty);
router.get("/", filterProperties);
router.get("/allProperties", allProperties);
module.exports = router;