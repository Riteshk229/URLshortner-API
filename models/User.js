// importing mongoose
const mongoose = require("mongoose");

// creating schema for USERS
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// creating model of User with the created schema
const User = mongoose.model("User", userSchema);

// exporting  User Model
module.exports = User;