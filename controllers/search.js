const request = require("request");

exports.handleSeriesSearch = async (req, res) => {
  try {
    let data = {
      apikey: process.env.API_KEY
    };
    request(
      {
        url: `https://api.thetvdb.com/search/series?name=${req.body.searchText}`,
        method: "GET",
        json: data,
        headers: { Authorization: "Bearer " + req.header("Authorization") }
      },
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
