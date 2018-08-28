const axios = require("axios");

const quoteList = async (_, args) => {
  const { name } = args;
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/market/list/${name}?displayPercent=true`
  );
  return data;
};

module.exports = quoteList;
