const express = require("express");
const db = require("./utils/db-connection");
const userRoutes = require("./routes/usersRoutes");
const busRoutes = require("./routes/busesRoutes");
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/buses", busRoutes);

app.listen(3000, () => {
  console.log("server is running");
});
