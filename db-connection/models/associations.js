const student = require("../models/students");
const identityCard = require("../models/identityCard");
const department = require("../models/department");

//one to one
student.hasOne(identityCard);
identityCard.belongsTo(student);

// one to many
department.hasMany(student);
student.belongsTo(department);

module.exports = { student, identityCard, department };
