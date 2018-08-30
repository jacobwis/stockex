import 'mq4-hover-shim/dist/browser/mq4-hover-shim.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { apolloClient } from './apollo';

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
