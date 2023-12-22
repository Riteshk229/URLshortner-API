// importing required methods
const { sign, verify } = require("jsonwebtoken");

// creating JWT 
const createTokens = (user) => {
    const accessToken = sign(
        {
            username: user.username,
            id: user._id
        },
        "urlshortnerGURUCOOL");
    return accessToken;
}

// validate JWT
const validateToken = (req, res, next) => {
    // checking  accesstoken
    const accessToken = req.cookies["access-token"];

    // acesstoken doesn't exist
    if (!accessToken) {
        // not authenticated
        return res.status(400).json("Error : User not Authenticated!");
    }

    try {
        // verifying JWT
        const validToken = verify(accessToken, "urlshortnerGURUCOOL");
        // token exist
        if (validToken) {
            // user authenticated and passing to the next function
            req.authenticated = true;
            return next();
        }
    } catch (err) {
        // error
        return res.status(400).json({ error: err });
    }
}

module.exports = { createTokens,validateToken };