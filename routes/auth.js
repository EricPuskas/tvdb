const express = require("express");
const router = express.Router();
const { authenticate } = require("../controllers/auth");

// @route   POST api/auth
// @desc    get Token from API
// @access  Public
router.post("/", authenticate);

module.exports = router;
