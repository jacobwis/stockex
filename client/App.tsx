import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainLayout from './components/MainLayout';
import Card from './components/Card';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <Card>
        <h1>aldkmas</h1>
      </Card>
    </MainLayout>
  );
};

export default hot(module)(App);
