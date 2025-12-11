const Student = require("../models/students");
const identityCardModel = require("../models/identityCard");
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({ raw: true });
    if (!students) {
      res.status(404).send("students not found");
      return;
    }

    res.status(200).send(students);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error during fetching the students");
  }
};

const getStudentWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id, { raw: true });
    if (!student) {
      res.status(404).send("student not found");
      return;
    }

    res.status(200).send(student);
  } catch (e) {
    console.log(e.message);
    res.status(404).send("student not found");
  }
};

const addEntry = async (req, res) => {
  try {
    const { name, email, age, cardNumber } = req.body;
    if (!name || !email || !age) {
      console.log("name, email,age and cardNumber is required");
      return;
    }

    const student = await Student.create({
      Name: name,
      Email: email,
      age: age,
    });

    const identityCard = await identityCardModel.create({
      cardNumber,
      studentId: student.id,
    });

    res.status(200).send(`student with name ${name} added`);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error occur during adding a student");
  }
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("student not found");
      return;
    }

    student.Name = name;
    student.save();
    res.status(200).send(`student with id ${id} updated successfully`);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error occur during updating student details");
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (!student) {
      res.status(404).send("student not found");
      return;
    }

    res.status(200).send(`student with id ${id} deleted successfully`);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error in deleting student record");
  }
};

module.exports = {
  getAllStudents,
  getStudentWithId,
  addEntry,
  updateEntry,
  deleteEntry,
};
