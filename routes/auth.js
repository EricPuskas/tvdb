const express = require("express");
const router = express.Router();
const { authenticate } = require("../controllers/auth");

// @route   POST api/auth
// @desc    Login and get token
// @access  Public
router.post("/", authenticate);

module.exports = router;
