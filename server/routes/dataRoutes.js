const express = require("express");
const dataController = require("../controllers/dataController");
const router = express.Router();

router.route("/addvisit").get(dataController.addVisit);
router.route("/sendemail").post(dataController.SendEmail);
router.route("/interactproject").post(dataController.InteractProject);
module.exports = router;