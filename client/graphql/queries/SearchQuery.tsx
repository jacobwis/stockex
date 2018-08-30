import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { SearchResult } from '../types';

export const SEARCH_QUERY = gql`
  query SearchQuery($q: String!) {
    search(q: $q) {
      symbol
      name
    }
  }
`;

interface Data {
  search: SearchResult[];
}

interface Variables {
  q?: string;
}

type Result = QueryResult<Data, Variables>;

interface Props extends Variables {
  children: (props: Result) => React.ReactNode;
}

export const SearchQuery: React.StatelessComponent<Props> = props => {
  return (
    <Query
      query={SEARCH_QUERY}
      variables={{
        q: props.q
      }}
    >
      {result => props.children(result)}
    </Query>
  );
};
