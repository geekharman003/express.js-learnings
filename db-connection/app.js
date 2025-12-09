const express = require("express");
const db = require("./utils/db-connection");
const studentsRoutes = require("./routes/studentsRoutes");
const app = express();
app.use(express.json());

app.use("/students", studentsRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server is running");
});
