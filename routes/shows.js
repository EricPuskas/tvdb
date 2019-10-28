const express = require("express");
const router = express.Router();
const { getShow } = require("../controllers/shows");

// @route   GET api/shows/:id
// @desc    Make a request to the API and retrieve specific show by ID
// @access  Public
router.get("/:id", getShow);

module.exports = router;
