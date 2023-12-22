const express = require("express");

const router = express.Router();

router.use("/api", require("./url"));
router.use("/user", require("./user"));


module.exports = router;