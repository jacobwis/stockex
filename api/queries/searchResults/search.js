const axios = require('axios');

var allSymbols;

(async () => {
  const { data } = await axios.get(
    'https://api.iextrading.com/1.0/ref-data/symbols'
  );
  allSymbols = data;
})();

const search = async (_, args) => {
  const q = args.q.toLowerCase();

  let searchResults = [];
  allSymbols.forEach(s => {
    const symbol = s.symbol.toLowerCase();
    const name = s.name.toLowerCase();
    if (symbol === q || name === q) {
      searchResults = [s, ...searchResults];
      return;
    }
    if (symbol.includes(q) || name.includes(q)) {
      searchResults.push(s);
    }
  });

  return searchResults;
};

module.exports = search;
