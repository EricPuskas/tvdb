const filterInput = input => {
  return input.replace(/[^\w\s]/gi, "");
};

const createSuggestions = (word, data) => {
  let filter = filterInput(word);
  const re = new RegExp(`${filter.toLowerCase()}.*\\B`, "g");
  return data.filter(item => re.test(item.toLowerCase()));
};

export default createSuggestions;
