import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomeView from './components/HomeView';
import StockView from './components/StockView';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/:symbol" component={StockView} />
      </Switch>
    </MainLayout>
  );
};

export default hot(module)(App);
