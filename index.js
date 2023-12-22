const express = require("express");
const db = require("./config/mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    name: "usrlshortener",
    secret: "123",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}))


app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`Server running up and runnning on PORT : ${PORT}`);
})
