const express = require("express");
const db = require("./utils/db-connection");
const studentModel = require("./models/students");
const studentsRoutes = require("./routes/studentsRoutes");
const app = express();
app.use(express.json());

app.use("/students", studentsRoutes);

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => {
    console.log(e);
  });
