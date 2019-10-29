const rp = require("request-promise-native");

exports.authenticate = async (req, res) => {
  try {
    const options = {
      url: "https://api.thetvdb.com/login",
      method: req.method,
      json: { apikey: process.env.API_KEY }
    };
    let response = await rp(options);
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
