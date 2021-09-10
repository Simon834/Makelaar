var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
  updateProperty,
} = require("../controllers/propertiesController");
const { filterProperties } = require("../controllers/filterControllers")

router.post("/addProperty", addNewProperty);
router.get("/", filterProperties);
router.get("/allProperties", allProperties);
router.put("/updateProperty", updateProperty);
module.exports = router;