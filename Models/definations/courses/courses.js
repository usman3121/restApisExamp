const { DataTypes } = require("sequelize");
let sequelize = require("../../../common/dbConection");
const course = sequelize.define(
  "course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    courseName: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    courseDescription: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    department: {
      unique: false,
      allowNull: false,
      type: DataTypes.STRING,
    },
    creditHours: {
      unique: false,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    instructor: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "course",
  }
);
module.exports = course;
