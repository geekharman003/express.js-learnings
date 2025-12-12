const express = require("express");
const db = require("./utils/db-connection");
const studentsRoutes = require("./routes/studentsRoutes");
const courseRoutes = require("./routes/courseRoutes");
require("./models/students");
require("./models/identityCard");
require("./models/associations");
require("./models/department");
require("./models/courses");
require("./models/studentCourses");

const app = express();
app.use(express.json());

app.use("/students", studentsRoutes);
app.use("/courses", courseRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => {
    console.log(e);
  });
