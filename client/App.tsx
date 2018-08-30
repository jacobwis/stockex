import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { StockQuery } from './graphql';
import MainLayout from './components/MainLayout';
import HomeView from './components/HomeView';
import StockView from './components/StockView';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route
          path="/:symbol"
          render={props => {
            const symbol = props.match.params.symbol;
            return (
              <StockQuery symbol={symbol}>
                {({ data, loading }) => {
                  if (!data || loading) {
                    return <div />;
                  }

                  return <StockView stock={data.stockFromSymbol} />;
                }}
              </StockQuery>
            );
          }}
        />
      </Switch>
    </MainLayout>
  );
};

export default hot(module)(App);
