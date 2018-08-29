import * as React from 'react';
import { QuoteListQuery, NewsQuery } from '../graphql';
import Card from './Card';
import Text from './Text';
import QuoteList from './QuoteList';
import NewsList from './NewsList';

const HomeView: React.StatelessComponent = () => {
  return (
    <Card className="HomeView" round>
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
      <div className="HomeView__section HomeView__news">
        <Text className="HomeView__heading" size="lg" weight="bold">
          Latest News
        </Text>
        <NewsQuery>
          {({ data }) => {
            if (!data) {
              return <div />;
            }

            return <NewsList news={data.news} />;
          }}
        </NewsQuery>
      </div>
    </Card>
  );
};

export default HomeView;
