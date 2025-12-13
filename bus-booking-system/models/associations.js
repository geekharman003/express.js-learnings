const User = require("./user");
const Booking = require("./booking");
const Bus = require("./bus");

//one to many
User.hasMany(Booking);
Booking.belongsTo(User);

//one to many
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = {
  User,
  Booking,
  Bus,
};
