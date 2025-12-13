const express = require("express");
const db = require("./utils/db-connection");
const User = require("./models/user");
const Booking = require("./models/booking");
const Bus = require("./models/bus");
const Payment = require("./models/payment");
const associations = require("./models/associations");
const userRoutes = require("./routes/usersRoutes");
const busRoutes = require("./routes/busesRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/buses", busRoutes);
app.use("/bookings", bookingRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((e) => {
    console.log(e);
  });
