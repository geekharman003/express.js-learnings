const db = require("../utils/db-connection");

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

const addEntry = (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    console.log("name, email and age is required");
    return;
  }
  const insertQuery = `INSERT INTO students (name,email,age)
  VALUES (?,?,?)`;
  db.execute(insertQuery, [name, email, age], (err) => {
    try {
      if (err) {
        res.status(500).send("error in adding student into db");
        db.end();
        throw new Error(err);
      }
      res.status(200).send(`student with name ${name} added successfully`);
    } catch (e) {
      console.log(e.message);
    }
  });
};

function fetchOldData(id) {
  const fetchQuery = "SELECT * FROM students WHERE id = ?";
  return new Promise((resolve, reject) => {
    try {
      db.execute(fetchQuery, [id], (err, result) => {
        if (err) {
          return reject(err);
        }

        resolve(result[0]);
      });
    } catch (e) {
      console.log(e.message);
    }
  });
}

const updateEntry = async (req, res) => {
  const { id } = req.params;
  const oldData = await fetchOldData(id);
  let { name, email, age } = req.body;
  if (!name) {
    name = oldData["Name"];
  }
  if (!email) {
    email = oldData["Email"];
  }
  if (!age) {
    age = oldData["age"];
  }

  const updateQuery = `UPDATE students SET name = ?,email = ?,age = ? 
  WHERE id = ?`;
  db.execute(updateQuery, [name, email, age, id], (err, result) => {
    try {
      if (err) {
        res.status(500).send("error in updating student details");
        db.end();
        throw new Error(err);
      }

      if (result.affectedRows === 0) {
        res.status(404).send(`student with id ${id} not found`);
        return;
      }

      res.status(200).send(`student with id ${id} updated successfully`);
    } catch (e) {
      console.log(e.message);
    }
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;

  const deleteQuery = "DELETE FROM students WHERE id = ?";
  db.execute(deleteQuery, [id], (err, result) => {
    try {
      if (err) {
        res.status(500).send("error in deleting student entry");
        db.end();
        throw new Error(err);
      }

      if (result.affectedRows === 0) {
        res.status(404).send(`student with id ${id} not exist`);
        return;
      }

      res.status(200).send(`student with id ${id} successfully deleted`);
    } catch (e) {
      console.log(e.message);
    }
  });
};

module.exports = {
  getAllStudents,
  getStudentWithId,
  addEntry,
  updateEntry,
  deleteEntry,
};
