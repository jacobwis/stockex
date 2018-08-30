const { merge } = require('lodash');
const books = require('./books');
const quotes = require('./quotes');
const articles = require('./articles');
const searchResults = require('./searchResults');
const stocks = require('./stocks');

module.exports = merge({}, books, quotes, articles, searchResults, stocks);
