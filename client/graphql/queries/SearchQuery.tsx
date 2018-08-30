import * as React from 'react';
import { debounce } from 'lodash';
import { ApolloClient } from 'apollo-client';
import { ApolloConsumer } from 'react-apollo';
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

interface RenderProps {
  onChange: (value: string) => void;
  data: SearchResult[];
}

interface Props {
  children: (props: RenderProps) => React.ReactNode;
}

interface State {
  searchResults?: SearchResult[];
}

export class SearchQuery extends React.Component<Props, State> {
  public state: State = {};

  public debouncedOnChange = debounce(
    async (client: ApolloClient<any>, value: string) => {
      const { data } = await client.query<Data, Variables>({
        query: SEARCH_QUERY,
        variables: {
          q: value
        }
      });
      this.setState({
        searchResults: data.search
      });
    },
    100
  );

  public onChange = (client: ApolloClient<any>, value: string) => {
    this.debouncedOnChange(client, value);
  };

  public render() {
    return (
      <ApolloConsumer>
        {client => {
          return (
            <React.Fragment>
              {this.props.children({
                data: this.state.searchResults,
                onChange: (value: string) => {
                  this.onChange(client, value);
                }
              })}
            </React.Fragment>
          );
        }}
      </ApolloConsumer>
    );
  }
}
