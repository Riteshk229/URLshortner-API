// importing express,router and authentication method
const express = require("express");
const router = express.Router();
// middleware to valide users
const { validateToken} = require("../config/JWT");

// importing URL controller
const urlController = require("../controller/urlController");

// to shorten the given URL
router.post('/shorten', validateToken, urlController.shorten);
// redirects to original URL
router.get('/shortenURL',validateToken,urlController.fetch);

// exporting router
module.exports = router; 