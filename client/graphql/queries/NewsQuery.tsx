import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { Article } from '../types';

const QUERY = gql`
  query NewsQuery($symbol: String) {
    news(symbol: $symbol) {
      datetime
      headline
      source
      url
      summary
      related
      image
    }
  }
`;

interface Data {
  news: Article[];
}

interface Variables {
  symbol?: string;
}

type Result = QueryResult<Data, Variables>;

interface Props extends Variables {
  children: (props: Result) => React.ReactNode;
}

export const NewsQuery: React.StatelessComponent<Props> = props => {
  return (
    <Query
      query={QUERY}
      variables={{
        symbol: props.symbol
      }}
    >
      {result => props.children(result)}
    </Query>
  );
};
