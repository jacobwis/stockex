import * as React from 'react';
import { hot } from 'react-hot-loader';
import { QuoteListQuery } from './graphql';

const App: React.StatelessComponent = () => {
  return (
    <QuoteListQuery name="mostactive">
      {({ data }) => {
        return <div />;
      }}
    </QuoteListQuery>
  );
};

export default hot(module)(App);
