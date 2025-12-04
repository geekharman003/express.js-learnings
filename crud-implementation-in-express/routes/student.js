const express = require("express");
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
    const names = [];
    let output = "Students:";

    for(const student of students){
        names.push(student["name"]);
    }

    output += names.join(", ");
    res.send(output);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  let output = "Student not found";

  for (const student of students) {
    if(student["id"] === id){
        output = `Student: ${student["name"]}`;
        break;
    }
  }
  
  res.send(output);
});

module.exports = router;
