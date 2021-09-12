var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
  idProperties,
  updateProperty,
} = require("../controllers/propertiesController");
const { filterProperties } = require("../controllers/filterControllers");

router.post("/addProperty", addNewProperty);
router.get("/filter", filterProperties);
router.get("/allProperties", allProperties);
router.get("/:id", idProperties);
router.put("/editproperty", updateProperty);

module.exports = router;
