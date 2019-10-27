const express = require("express");
const router = express.Router();
const { handleSeriesSearch } = require("../controllers/search");

// @route   GET api/search/series?name="param"
// @desc    Login and get token
// @access  Public
router.post("/series", handleSeriesSearch);

module.exports = router;
