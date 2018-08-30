const { merge } = require('lodash');
const books = require('./books');
const quotes = require('./quotes');
const articles = require('./articles');
const searchResults = require('./searchResults');
const stocks = require('./stocks');
const chartPoints = require('./chartPoints');

module.exports = merge(
  {},
  books,
  quotes,
  articles,
  searchResults,
  stocks,
  chartPoints
);
