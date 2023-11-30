const { DataTypes } = require("sequelize");
let sequelize = require("../../../common/dbConection");
const teacherCourse = sequelize.define(
  "teacherCourse",
  {
    teacherId: {
      type: DataTypes.INTEGER,
    },
    courseId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "teacherCourse",
  }
);
module.exports = teacherCourse;
