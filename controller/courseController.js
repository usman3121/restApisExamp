const courseService = require("../services/courseService");
const teacherService = require("../services/teacherService");

module.exports = {
  getCourses: async (req, res) => {
    const data = await courseService.getCourses();
    res.body(data);
  },

  createCourses: async (req, res) => {
    const data = await courseService.createCourses(req.body);
    res.send(data);
  },

  createCoursesHelper: async (data) => {
    const userData = await courseService.createCourses(data);
    return userData;
  },
};
