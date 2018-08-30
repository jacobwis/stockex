const stockFromSymbol = require('./stockFromSymbol');
const news = require('./news');
module.exports = {
  Query: {
    stockFromSymbol
  },
  Stock: {
    news
  }
};
