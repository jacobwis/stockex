import 'mq4-hover-shim/dist/browser/mq4-hover-shim.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import './styles/index.scss';
import { apolloClient } from './apollo';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
