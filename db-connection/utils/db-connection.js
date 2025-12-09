const mysql = require("mysql2");

const credentials = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
};

const connection = mysql.createConnection(credentials);

connection.connect((err) => {
  try {
    if (err) throw new Error(err);

    console.log("connected!");
    const creationQuery = `CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            Name VARCHAR(20),
            Email VARCHAR(20)
            )`;

    connection.execute(creationQuery, (err) => {
      if (err) throw new Error(err);

      //   console.log("query has been successfully implemented");
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = connection;
