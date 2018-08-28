import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainLayout from './components/MainLayout';
import Card from './components/Card';
import Text from './components/Text';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <Card round>
        <div style={{ padding: '30px' }}>
          <Text color="light" size="xl">
            Active Today
          </Text>
          <Text color="blue" size="lg">
            Active Today
          </Text>
          <Text color="red" size="md">
            Active Today
          </Text>
          <Text color="green" size="body">
            Active Today
          </Text>
          <Text color="light" size="sm">
            Active Today
          </Text>
        </div>
      </Card>
    </MainLayout>
  );
};

export default hot(module)(App);
