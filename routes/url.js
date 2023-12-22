const express = require("express");

const router = express.Router();
const { validateToken} = require("../config/JWT");

const urlController = require("../controller/urlController");

router.post('/shorten',validateToken, urlController.shorten);
router.get('/shortenURL',validateToken,urlController.fetch);

module.exports = router; 