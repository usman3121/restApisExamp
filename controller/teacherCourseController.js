const { models } = require("../models/definations");

module.exports = {
  getTeacherCourse: async (req, res) => {
    const { courseId, teacherId } = req.body;

    const teacherCourse = {
      courseId: courseId,
      teacherId: teacherId,
    };
    await models.teacherCourse.create(teacherCourse);

    res.send(teacherCourse);
  },
};
