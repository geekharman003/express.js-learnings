const UserModel = require("../models/user");
const Booking = require("../models/booking");
const Bus = require("../models/bus");
const user = require("../models/user");
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll({ raw: true });
    if (!users) {
      res.status(404).send("users not found");
      return;
    }

    res.status(200).send(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error occurs during fetching the users");
  }
};

const getUserBookingDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const userBooking = await Booking.findAll(
      {
        include: [
          {
            model: Bus,
          },
        ],
      },
      {
        where: {
          userId: id,
        },
      }
    );

    res.status(200).json(userBooking);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

const addNewUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).send("name and email are required");
      return;
    }
    const user = await UserModel.create({
      name: name,
      email: email,
    });

    res.status(200).send(`user with name ${name} added`);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("error occur during adding the user");
  }
};

module.exports = { getAllUsers, getUserBookingDetails, addNewUser };
