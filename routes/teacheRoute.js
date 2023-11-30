var express = require("express");
var router = express.Router();
const { teacherController } = require("../controller/index");
router.get("/", teacherController.getTeacher);
router.get("/:id", teacherController.getTeacherById);
router.post("/createTeacher", teacherController.createTeacher);
module.exports = router;
