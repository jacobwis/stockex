const axios = require('axios');

const news = async (_, args) => {
  const { symbol } = args;
  const { data } = await axios.get(
    `https://api.iextrading.com/1.0/stock/${symbol || 'market'}/news`
  );
  return data.map(article => ({
    ...article,
    related: article.related.split(',')
  }));
};

module.exports = news;
