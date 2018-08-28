const { merge } = require("lodash");
const books = require("./books");
const quotes = require("./quotes");

module.exports = merge({}, books, quotes);
