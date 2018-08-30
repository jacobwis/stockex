const axios = require('axios');

const stockFromSymbol = async (_, { symbol }) => {
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/${symbol}/batch?types=company,stats,quote&displayPercent=true`
  );
  const { company, quote, stats } = data;

  return {
    symbol: quote.symbol,
    companyName: quote.companyName,
    description: company.description,
    latestPrice: quote.latestPrice,
    changePercent: quote.changePercent,
    open: quote.open,
    high: quote.high,
    low: quote.low,
    volume: quote.latestVolume,
    averageVolume: quote.avgTotalVolume,
    dividendYield: stats.dividendYield,
    week52High: quote.week52High,
    week52Low: quote.week52Low,
    marketCap: quote.marketCap,
    peRatio: quote.peRatio
  };
};

module.exports = stockFromSymbol;
