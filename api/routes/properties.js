var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
  idProperties,
} = require("../controllers/propertiesController");

router.post("/addProperty", addNewProperty);
router.get("/allProperties", allProperties);
router.get("/:id", idProperties);

module.exports = router;