const express = require("express");
const db = require("./config/mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server running up and runnning on PORT : ${PORT}`);
})
