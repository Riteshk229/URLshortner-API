const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://riteshk229:Wh!t3W0lf@cluster0.bfzffqa.mongodb.net/URLshortner?retryWrites=true&w=majority");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", () =>{
    console.log("**** Connected to Database : : MongoDB ****");
})

module.exports = db;