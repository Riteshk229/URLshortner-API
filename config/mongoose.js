// imprting mongoose  and dontenv
const mongoose = require("mongoose");
require("dotenv").config();

// connecting to Database
mongoose.connect(process.env.MongoDB_URL);

// checking connection
const db = mongoose.connection;

// failure
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

// success
db.once("open", () =>{
    console.log("**** Connected to Database : : MongoDB ****");
})

// exporting database
module.exports = db;