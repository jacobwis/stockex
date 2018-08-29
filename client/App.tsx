import * as React from 'react';
import { hot } from 'react-hot-loader';
import { QuoteListQuery } from './graphql';
import MainLayout from './components/MainLayout';
import QuoteList from './components/QuoteList';
import Card from './components/Card';
import HomeView from './components/HomeView';

const App: React.StatelessComponent = () => {
  return (
    <MainLayout>
      <HomeView />
      {/* <QuoteListQuery name="mostactive">
        {({ data }) => {
          if (!data) {
            return <div />;
          }

          return (
            <div style={{ width: '500px' }}>
              <Card>
                <div style={{ width: '300px', padding: '16px' }}>
                  <QuoteList quotes={data.quoteList} />
                </div>
              </Card>
            </div>
          );
        }}
      </QuoteListQuery> */}
    </MainLayout>
  );
};

export default hot(module)(App);
