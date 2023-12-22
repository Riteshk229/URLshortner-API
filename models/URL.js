// importing mongoose
const mongoose = require("mongoose");

// creating Schema for URL
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

// creating URL model with urlSchema
const URL = mongoose.model("URL", urlSchema);

// exporting URL model
module.exports = URL;
