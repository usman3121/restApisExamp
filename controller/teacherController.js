const courseController = require("./courseController");
const teacherService = require("../services/teacherService");

module.exports = {
  getTeacher: async (req, res) => {
    const data = await teacherService.getTeacher();
    res.send(data);
  },

  getTeacherById: async (req, res) => {
    const data = await teacherService.getTeacherById(req.params.id);

    res.send(data);
  },

  createTeacher: async (req, res) => {
    const teacher = await teacherService.createTeacher(req.body);
    res.send(teacher);
  },
};
