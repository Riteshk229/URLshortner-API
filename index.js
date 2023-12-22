// importing express,  cookieparser and database
const express = require("express");
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");

// creating express app
const app = express();
const PORT = process.env.PORT || 3000;

// allowing json to be passed through url
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/', require('./routes/index'));

// listening on server
app.listen(PORT, () => {
    console.log(`Server running up and runnning on PORT : ${PORT}`);
})
