// importing URL model  and required methods
const URL = require("../models/URL");
const {nanoid} = require("nanoid");
const {validateURL} = require("../utils/utils");

// method to shorten the long URL
module.exports.shorten = async function (req, res) {
    // destructing the original URL
    const { originalURL } = req.body;
    // creating urlID
    const urlID = nanoid();

    // checking if  the original URL  is valid or  not
    if (validateURL(originalURL)) {
        try {
            // checking if  the original URL exist
            let url = await URL.findOne({ originalURL: originalURL });
            
            // original url dosen't exists
            if (!url) {
                // creating shorten URL
                const shortenURL = `${process.env.Base}/${urlID}`;

                // creating new url object
                url = await URL.create({
                    originalURL: originalURL,
                    shortenURL : shortenURL
                })

                // savingthe new URL object
                await url.save();

                // success
                res.json({
                    id : url._id,
                    originalURL : url.originalURL,
                    shortenURL : url.shortenURL
                });
            }
            
            // original URL exist
            // success
            res.json({
                id : url._id,
                originalURL : url.originalURL,
                shortenURL : url.shortenURL
            });

        } catch (err) {
            // error
            console.log("Error in shortening the URL : ", err);
            res.status(500).json("Server Error : Unabale to shorten URL");
        }
    } else {
        // error
        res.status(400).json('Invalid Original URL');
    }
}

// method to fetch origial URL  with the shorten URL
module.exports.fetch = async function (req, res) {
    try {
        // finding the object with the given shorten URL
        const url = await URL.findOne({ shortenURL: req.body.url });
        
        // URL object exists
        if (url) {
            // redirect to original URL
            return res.redirect(url.originalURL);
        } else {
            // original URL  doesn't exist
            res.status(404).json("Not Found");
        }
    } catch (err) {
        // error
        console.log(err);
        res.status(500).json("Server Error");
    }
}