var express = require("express");
var router = express.Router();
const {addNewProperty} = require("../controllers/propertiesController");

router.post("/addProperty", addNewProperty);
router.get("/",)

module.exports = router;