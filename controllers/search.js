const request = require("request");
const configureOptions = require("../utils/configureOptions");

exports.handleSeriesSearch = async (req, res) => {
  try {
    request(
      configureOptions(
        `https://api.thetvdb.com/search/series?name=${req.body.searchText}`,
        "GET",
        req
      ),
      function(err, resp, data) {
        if (err || data.Error) {
          if (data.Error) return res.status(401).json(data.Error);
          if (err) return res.status(401).json(err.message);
        } else {
          return res.status(200).json(data);
        }
      }
    );
  } catch (err) {}
};

module.exports = exports;
