import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { Stock } from '../types';

const QUERY = gql`
  query StockQuery($symbol: String!) {
    stockFromSymbol(symbol: $symbol) {
      companyName
      symbol
      description
      latestPrice
      changePercent
      open
      high
      low
      volume
      averageVolume
      dividendYield
      week52High
      week52Low
      marketCap
      peRatio
      news {
        headline
        source
        url
      }
    }
  }
`;

interface Data {
  stockFromSymbol: Stock;
}

interface Variables {
  symbol: string;
}

type Result = QueryResult<Data, Variables>;

interface Props extends Variables {
  children: (props: Result) => React.ReactNode;
}

export const StockQuery: React.StatelessComponent<Props> = props => {
  return (
    <Query query={QUERY} variables={{ symbol: props.symbol }}>
      {result => props.children(result)}
    </Query>
  );
};
