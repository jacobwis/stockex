const axios = require('axios');

const wait = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const quoteList = async (_, args) => {
  const { name } = args;
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/market/list/${name}?displayPercent=true`
  );

  return data;
};

module.exports = quoteList;
