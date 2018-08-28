import * as React from 'react';
import * as ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import App from './App';
import './styles/index.scss';
import { apolloClient } from './apollo';

apolloClient
  .query({
    query: gql`
      {
        quoteList(name: "gainers") {
          symbol
          companyName
        }
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root'));
