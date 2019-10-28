const configureOptions = (url, method, req) => {
  return {
    url,
    method,
    json: true,
    headers: { Authorization: "Bearer " + req.header("Authorization") }
  };
};

module.exports = configureOptions;
