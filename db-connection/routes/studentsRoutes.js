const express = require("express");
const studentController = require("../controllers/studentsController");
const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentWithId);
router.post("/", studentController.addEntry);
router.put("/:id", studentController.updateEntry);
router.delete("/:id", studentController.deleteEntry);

module.exports = router;
