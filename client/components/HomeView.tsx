import * as React from 'react';
import { QuoteListQuery, NewsQuery } from '../graphql';
import Card from './Card';
import Text from './Text';
import QuoteList from './QuoteList';

const HomeView: React.StatelessComponent = () => {
  return (
    <Card className="HomeView">
      <div className="HomeView__section HomeView__active">
        <Text className="HomeView__heading" size="lg" weight="bold">
          Active Today
        </Text>
        <QuoteListQuery name="mostactive">
          {({ data }) => {
            if (!data) {
              return <div />;
            }

            return <QuoteList quotes={data.quoteList} />;
          }}
        </QuoteListQuery>
      </div>
      <div className="HomeView__section HomeView__gainers">
        <Text className="HomeView__heading" size="lg" weight="bold">
          Gainers
        </Text>
        <QuoteListQuery name="gainers">
          {({ data }) => {
            if (!data) {
              return <div />;
            }

            return <QuoteList quotes={data.quoteList} />;
          }}
        </QuoteListQuery>
      </div>
      <div className="HomeView__section HomeView__losers">
        <Text className="HomeView__heading" size="lg" weight="bold">
          Losers
        </Text>
        <QuoteListQuery name="losers">
          {({ data }) => {
            if (!data) {
              return <div />;
            }

            return <QuoteList quotes={data.quoteList} />;
          }}
        </QuoteListQuery>
      </div>
      <div>
        <NewsQuery>
          {({ data }) => {
            console.log(data);
            return <div />;
          }}
        </NewsQuery>
      </div>
    </Card>
  );
};

export default HomeView;
