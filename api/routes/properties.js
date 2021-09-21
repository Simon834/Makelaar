var express = require("express");
var router = express.Router();
const {
  addNewProperty,
  allProperties,
  idProperties,
  updateProperty,
  deleteProperty,
  paymentProperty,

  // deleteProperty,
} = require("../controllers/propertiesController");

const {createPreference, newNotification, getAllPayments, addAllPayments} = require("../controllers/paymentsControllers")
const { filterProperties } = require("../controllers/filterControllers");
 
router.get("/allPayments", getAllPayments)
router.post("/payment", createPreference);
router.post("/notifications", newNotification)
router.post("/addProperty", addNewProperty);
router.get("/filter", filterProperties);
router.get("/allProperties", allProperties);
router.get("/:id", idProperties);
router.put("/editproperty", updateProperty);
router.delete("/delete", deleteProperty);
router.post("/addpayment", addAllPayments);

module.exports = router;