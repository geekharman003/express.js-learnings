const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" },
];

router.get("/", (req, res) => {
  const courseNames = [];
  let output = "Courses:";

  for (const course of courses) {
    courseNames.push(course["name"]);
  }

  output += courseNames.join(", ");
  res.send(output);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  let output = "Course not found";

  for (const course of courses) {
    if (course["id"] === id) {
      output = `Course: ${course["name"]}, Description: ${course["description"]}`;
      break;
    }
  }

  res.send(output);
});

module.exports = router;
