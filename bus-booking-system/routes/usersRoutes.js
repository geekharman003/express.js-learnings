const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/:id/bookings", userController.getUserBookingDetails);
router.get("/",userController.getAllUsers);
router.post("/",userController.addNewUser);

module.exports = router;
