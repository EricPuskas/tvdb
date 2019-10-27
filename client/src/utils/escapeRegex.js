const escapeRegex = text => {
  if (text !== "" || text !== null || text !== undefined) {
    return text.replace(/[\s]/g, "+");
  }
};

export default escapeRegex;
