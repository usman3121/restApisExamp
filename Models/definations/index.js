let sequelize = require("../../common/dbConection");
let user = require("../definations/users/users");
let student = require("../definations/students/students");
let teacher = require("./teachers/teachers");
let teacherCourse = require("./teachers/teacherCourses");
let course = require("./courses/courses");

user.hasOne(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

student.hasOne(course, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});
course.belongsTo(student, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false, unique: true },
});

// In models/Teacher.js
teacher.belongsToMany(course, { through: teacherCourse });
course.belongsToMany(teacher, { through: teacherCourse });

const models = sequelize.models;
console.log(models);

const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
