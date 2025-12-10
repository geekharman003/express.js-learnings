const db = require("../utils/db-connection");
const Student = require("../models/students");
const getAllStudents = (req, res) => {
  const fetchQuery = "SELECT * FROM students";
  db.execute(fetchQuery, (err, result) => {
    try {
      if (err) {
        res.status(500).send("error in fetching students details");
        db.end();
        throw new Error(err);
      }

      if (result.length === 0) {
        res.status(404).send("no students found");
        return;
      }

      res.status(200).send(result);
    } catch (e) {
      console.log(e.message);
    }
  });
};

const getStudentWithId = (req, res) => {
  const { id } = req.params;
  const fetchQuery = "SELECT * FROM students WHERE id = ?";
  db.execute(fetchQuery, [id], (err, result) => {
    try {
      if (err) {
        res.status(500).send("error fetching student details");
        db.end();
        throw new Error(err);
      }

      if (result.length === 0) {
        res.status(404).send(`no student found with id ${id}`);
        return;
      }

      res.status(200).send(result);
    } catch (e) {
      console.log(e.message);
    }
  });
};

const addEntry = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      console.log("name, email and age is required");
      return;
    }

    const student = await Student.create({
      Name: name,
      Email: email,
      age: age,
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
