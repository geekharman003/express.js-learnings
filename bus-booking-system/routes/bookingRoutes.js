const express = require("express");
const bookingController = require("../controllers/bookingController");
const { route } = require("./usersRoutes");
const router = express.Router();

router.post("/", bookingController.addBooking);

module.exports = router;
