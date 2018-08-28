import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainLayout from './components/MainLayout';
import Card from './components/Card';
import Text from './components/Text';
import ChangePill from './components/ChangePill';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <Card round>
        <div style={{ padding: '30px' }}>
          <ChangePill change={0.53} />
        </div>
      </Card>
    </MainLayout>
  );
};

export default hot(module)(App);
