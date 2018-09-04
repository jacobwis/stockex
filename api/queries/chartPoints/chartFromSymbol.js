const axios = require('axios');

const wait = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const chartFromSymbol = async (_, { symbol, range }) => {
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`
  );

  return data
    .map(point => ({
      label: point.label,
      value: point.close || point.marketAverage
    }))
    .filter(point => {
      if (point.value <= -1) {
        return false;
      }
      return true;
    });
};

module.exports = chartFromSymbol;
