const express = require("express");
const app = express();
const bookRoutes = require("./routes/books")
const PORT = 3000;

app.use(express.json());

app.use("/books",bookRoutes);

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})