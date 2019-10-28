const configureOptions = (url, method, req) => {
  // Configure options for the async request
  return {
    url,
    method,
    json: true,
    headers: { Authorization: "Bearer " + req.header("Authorization") }
  };
};

module.exports = configureOptions;
