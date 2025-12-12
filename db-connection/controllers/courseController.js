const { raw } = require("mysql2");
const Courses = require("../models/courses");
const studentModel = require("../models/students");

const addCourse = (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).send("course name is required");
      return;
    }

    Courses.create({
      name: name,
    }).then((result) => {
      res.status(201).json(result);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addStudentsToCourses = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;

    const student = await studentModel.findByPk(studentId);
    const course = await Courses.findAll({
      where: {
        id: courseIds,
      },
    });
    // console.log(course);

    if (!student) {
      console.log(`student with id ${studentId} not found`);
      return;
    }

    if (course.length === 0) {
      console.log(`courses with id ${courseIds} not found`);
      return;
    }

    const result = await student.addCourse(course);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addCourse, addStudentsToCourses };
