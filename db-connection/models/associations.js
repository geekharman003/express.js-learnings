const student = require("./students");
const identityCard = require("./identityCard");
const department = require("./department");
const courses = require("./courses");
const studentCourses = require("./studentCourses");

//one to one
student.hasOne(identityCard);
identityCard.belongsTo(student);

// one to many
department.hasMany(student);
student.belongsTo(department);

//many to many
student.belongsToMany(courses, { through: studentCourses });
courses.belongsToMany(student, { through: studentCourses });

module.exports = { student, identityCard, department, courses, studentCourses };