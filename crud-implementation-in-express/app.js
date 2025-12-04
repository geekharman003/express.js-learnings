const express = require("express");
const app = express();
const studentRoutes = require("./routes/student");
const courseRoutes = require("./routes/course");
const PORT = 3000;

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/{*splat}", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
