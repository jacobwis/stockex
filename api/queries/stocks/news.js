const axios = require('axios');

const news = async obj => {
  const symbol = obj.symbol;
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/${symbol}/news`
  );

  return data.map(article => ({
    ...article,
    related: article.related.split(',')
  }));
};

module.exports = news;
