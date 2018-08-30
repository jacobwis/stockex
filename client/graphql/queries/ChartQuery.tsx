import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { ChartPoint } from '../types';

const QUERY = gql`
  query ChartQuery($symbol: String!) {
    chartFromSymbol(symbol: $symbol) {
      label
      value
    }
  }
`;

interface Data {
  chartFromSymbol: ChartPoint[];
}

interface Variables {
  symbol: string;
}

type Result = QueryResult<Data, Variables>;

interface Props extends Variables {
  children: (props: Result) => React.ReactNode;
}

export const ChartQuery: React.StatelessComponent<Props> = props => {
  return (
    <Query query={QUERY} variables={{ symbol: props.symbol }}>
      {result => props.children(result)}
    </Query>
  );
};
