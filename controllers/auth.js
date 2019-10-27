const request = require("request");

exports.authenticate = async (req, res) => {
  try {
    let data = {
      apikey: process.env.API_KEY
    };
    request(
      {
        url: "https://api.thetvdb.com/login",
        method: req.method,
        json: data
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
