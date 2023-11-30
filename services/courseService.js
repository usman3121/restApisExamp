const { models } = require("../models/definations");

module.exports = {
  getCourses: async () => {
    const result = await models.course.findAll(); // jb tk data sara how na ho agly py na jaye
    return result;
  },

  createCourses: async (data) => {
    console.log(data);
    const result = await models.course.create(data);
    console.log(result);
    return result;
  },
};
