var express = require("express");
var router = express.Router();
const { teacherCourseController } = require("../controller/index");

router.post("/createTeacher", teacherCourseController.getTeacherCourse);
module.exports = router;
