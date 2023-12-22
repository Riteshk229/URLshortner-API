const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MongoDB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () =>{
    console.log("**** Connected to Database : : MongoDB ****");
})

module.exports = db;