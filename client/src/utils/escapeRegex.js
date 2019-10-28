const escapeRegex = text => {
  if (text !== "" || text !== null || text !== undefined) {
    // replace all white space with +, globally (replace all occurrences)
    return text.replace(/[\s]/g, "+");
  }
};

export default escapeRegex;
