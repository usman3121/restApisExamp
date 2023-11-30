const { models } = require("../models/definations");

module.exports = {
  getTeacher: async () => {
    const result = await models.teacher.findAll();
    console.log(result);
    return result;
  },

  getTeacherById: async (id) => {
    const result = await models.teacher.findOne({
      where: { id },
      include: [
        {
          model: models.course,
          through: {
            attributes: [],
          },
        },
      ],
    });
    return result;
  },

  createTeacher: async (data) => {
    console.log(data);
    const result = await models.teacher.create(data);
    console.log(result);
    return result;
  },
};
