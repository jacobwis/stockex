const { merge } = require('lodash');
const books = require('./books');
const quotes = require('./quotes');
const articles = require('./articles');

module.exports = merge({}, books, quotes, articles);
