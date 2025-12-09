const mysql = require("mysql2");

const credentials = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "busbooking",
};

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
  try {
    if (err) throw new Error(err);

    const createUsers = `CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
        )`;
    const createBuses = `CREATE TABLE IF NOT EXISTS Buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(20),
        totalSeats INT,
        availableSeats INT
        )`;
    const createBookings = `CREATE TABLE IF NOT EXISTS Bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
        )`;
    const createPayments = `CREATE TABLE IF NOT EXISTS Payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus VARCHAR(20)
        )`;

    connection.execute(createUsers, (err) => {
      if (err) throw new Error(err);
      console.log("Users table created successfully");
    });

    connection.execute(createBuses, (err) => {
      if (err) throw new Error(err);
      console.log("Buses table created successfully");
    });

    connection.execute(createBookings, (err) => {
      if (err) throw new Error(err);
      console.log("Bookings table created successfully");
    });

    connection.execute(createPayments, (err) => {
      if (err) throw new Error(err);
      console.log("Payments table created successfully");
    });
  } catch (e) {
    console.error(e);
  }
});

module.exports = connection;