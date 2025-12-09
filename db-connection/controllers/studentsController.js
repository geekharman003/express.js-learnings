const db = require("../utils/db-connection");

const addEntry = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = `INSERT INTO students (name,email)
  VALUES (?,?)`;
  db.execute(insertQuery, [name, email], (err) => {
    try {
      if (err) {
        res.status(500).send("error in adding student into db");
        db.end();
        throw new Error(err);
      }
      res.status(200).send(`student with name ${name} added successfully`);
    } catch (e) {
      console.log(e);
    }
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateQuery = "UPDATE students SET name = ?,email = ? WHERE id = ?";
  db.execute(updateQuery, [name, email, id], (err, result) => {
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
      console.log(e);
    }
  });
};

module.exports = { addEntry, updateEntry, deleteEntry };
