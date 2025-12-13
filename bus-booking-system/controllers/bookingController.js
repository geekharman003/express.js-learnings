const Booking = require("../models/booking");

const addBooking = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;

    if (!userId || !busId || !seatNumber) {
      console.log("userId,busId and seatNumber is required");
      return;
    }

    const booking = await Booking.create({
      userId,
      busId,
      seatNumber,
    });

    if (!booking) {
      res.status(404).send("no booking found");
      return;
    }

    res.status(201).json(booking);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

module.exports = { addBooking };
