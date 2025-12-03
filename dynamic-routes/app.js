const express = require("express");
const app = express();
const PORT = 3000;

app.get("/welcome/:username", (req, res) => {
  const { username } = req.params;
  const { role } = req.query;

  res.status(200).send(`Welcome ${username}, your role is ${role}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
