var express = require("express");
var router = express.Router();
const { courseController } = require("../controller/index");
router.get("/", courseController.getCourses);
router.post("/createCourses", courseController.createCourses);
module.exports = router;
