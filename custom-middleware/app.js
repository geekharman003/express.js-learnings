const express = require("express");
const app = express();
const PORT = 3000;

// custom middleware
app.use("/welcome",(req,res,next) => {
    req.user = "Guest";
    res.send(`<h1>Welcome ${req.user}!</h1>`)
})

app.listen(PORT,()=>{
    console.log("server is running")
})