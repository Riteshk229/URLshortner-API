// importing express and router
const express = require("express");
const router = express.Router();

// importing userController
const userController = require("../controller/userController");

// for new registration
router.post('/register', userController.register);
// for  logging in
router.post('/login', userController.login);

// exporting router
module.exports = router;