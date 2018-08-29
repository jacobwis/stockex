import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { Quote } from '../types';

const QUERY = gql`
  query QuoteListQuery($name: String!) {
    quoteList(name: $name) {
      companyName
      symbol
      changePercent
    }
  }
`;

export interface QuoteListData {
  quoteList: Quote[];
}

export interface QuoteListVariables {
  name: string;
}

export type QuoteListResult = QueryResult<QuoteListData, QuoteListVariables>;

interface Props extends QuoteListVariables {
  children: (props: QuoteListResult) => React.ReactNode;
}

export const QuoteListQuery: React.StatelessComponent<Props> = props => {
  return (
    <Query
      query={QUERY}
      variables={{
        name: props.name
      }}
    >
      {p => {
        return props.children(p);
      }}
    </Query>
  );
};
