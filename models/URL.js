const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
    },
    shortenURL: {
        type: String,
        required: true,
    }
}, {
    timestamps : true
});

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
