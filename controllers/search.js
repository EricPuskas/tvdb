const rp = require("request-promise-native");
const configureOptions = require("../utils/configureOptions");

exports.handleSeriesSearch = async (req, res) => {
  try {
    const searchOptions = configureOptions(
      `https://api.thetvdb.com/search/series?name=${req.body.searchText}`,
      "GET",
      req
    );
    let response = await rp(searchOptions);
    return res.status(200).json(response);
  } catch (err) {
    if (err.error.Error === "Not authorized") {
      return res
        .status(err.statusCode)
        .json(
          "Oops! Your token might have expired. Please try refreshing the page to get a new token."
        );
    }
    return res.status(err.statusCode).json(err.error.Error);
  }
};

module.exports = exports;
