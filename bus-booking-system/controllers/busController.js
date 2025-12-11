const { Op } = require("sequelize");
const BusModel = require("../models/bus");
const getAvailableBuses = async (req, res) => {
  try {
    const { seats } = req.params;
    const availablebuses = await BusModel.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });

    if (!availablebuses) {
      res.status(404).send("buses not found");
      return;
    }

    res.status(200).send(availablebuses);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error during fetching the buses");
  }
};

const addBus = (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    if (!busNumber || !totalSeats || !availableSeats) {
      res
        .status(400)
        .send("busNumber,totalSeats and availableSeats are required");
      return;
    }

    const bus = BusModel.create({
      busNumber,
      totalSeats,
      availableSeats,
    });

    res.status(200).send("bus added successfully");
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error occur during adding the bus");
  }
};

module.exports = { getAvailableBuses, addBus };
