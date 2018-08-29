import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainLayout from './components/MainLayout';
import HomeView from './components/HomeView';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
};

export default hot(module)(App);
