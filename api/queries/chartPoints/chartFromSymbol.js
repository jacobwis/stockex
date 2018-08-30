const axios = require('axios');

const chartFromSymbol = async (_, { symbol }) => {
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/${symbol}/chart/1d`
  );
  return data.map(point => ({
    label: point.label,
    value: point.average
  }));
};

module.exports = chartFromSymbol;
