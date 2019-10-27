const express = require("express");
const router = express.Router();
const { handleSeriesSearch } = require("../controllers/search");

// @route   POST api/search/series
// @desc    Make a request to the API and retrieve search results
// @access  Public
router.post("/series", handleSeriesSearch);

module.exports = router;
