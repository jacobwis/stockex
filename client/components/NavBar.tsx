import * as React from 'react';
import { SearchQuery } from '../graphql';
import Card from './Card';
import SearchInput from './SearchInput';

const NavBar: React.StatelessComponent = () => {
  return (
    <Card className="NavBar">
      <div className="NavBar__inner">
        <SearchQuery>
          {({ onChange, data }) => {
            return <SearchInput searchResults={data} onChange={onChange} />;
          }}
        </SearchQuery>
      </div>
    </Card>
  );
};

export default NavBar;
