const db = require("../utils/db-connection");
const getAvailableBuses = (req, res) => {
  const { seats } = req.params;
  const fetchQuery = `SELECT * FROM buses
    WHERE availableSeats > ?`;
  db.execute(fetchQuery, [seats], (err, result) => {
    try {
      if (err) {
        res.status(500).send("error fetching available buses");
        db.end();
        throw new Error(err);
      }

      res.status(200).send(result);
    } catch (e) {
      console.log(e);
    }
  });
};

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const inertQuery = `INSERT INTO buses (busNumber,totalSeats,availableSeats)
    VALUES (?,?,?)`;

  db.execute(inertQuery, [busNumber, totalSeats, availableSeats], (err) => {
    try {
      if (err) {
        res
          .status(500)
          .send("busNumber,totalSeats and AvailableSeats are required");
        db.end();
        throw new Error(err);
      }

      res.status(200).send(`bus with bus number ${busNumber} added`);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = { getAvailableBuses, addBus };
