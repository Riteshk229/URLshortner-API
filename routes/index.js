// importing express and router
const express = require("express");
const router = express.Router();

// redirecting to URL routes
router.use("/api", require("./url"));
// redirecting to user routes
router.use("/user", require("./user"));

// exporting router
module.exports = router;