const URL = require("../models/URL");
const {nanoid} = require("nanoid");
const {validateURL} = require("../utils/utils");

module.exports.shorten = async function (req, res) {
    const { originalURL } = req.body;
    const urlID = nanoid();
    if (validateURL(originalURL)) {
        try {
            let url = await URL.findOne({ originalURL : originalURL });

            if (!url) {
                const shortenURL = `${process.env.Base}/${urlID}`;

                url = await URL.create({
                    originalURL: originalURL,
                    shortenURL : shortenURL
                })

                await url.save();

                console.log("url", url);
                res.json({
                    id : url._id,
                    originalURL : url.originalURL,
                    shortenURL : url.shortenURL
                });
            }
            
            res.json({
                id : url._id,
                originalURL : url.originalURL,
                shortenURL : url.shortenURL
            });
        } catch (err) {
            console.log("Error in shortening the URL : ", err);
            res.status(500).json("Server Error : Unabale to shorten URL");
        }
    } else {
        res.status(400).json('Invalid Original URL');
    }
}

module.exports.fetch = async function (req, res) {

    try {
        const url = await URL.findOne({ shortenURL: req.body.url });
        
        if (url) {
            return res.redirect(url.originalURL);
        } else {
            res.status(404).json("Not Found");
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error");
    }
}