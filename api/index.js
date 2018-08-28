const { ApolloServer, gql } = require('apollo-server-express');
const { merge } = require('lodash');
const express = require('express');
const schema = require('./schema');
const queries = require('./queries');

const typeDefs = gql`
  ${schema}
`;

const resolvers = merge({}, queries);

const api = new ApolloServer({ typeDefs, resolvers });

module.exports = api;
