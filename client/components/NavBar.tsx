import * as React from 'react';
import { Link } from 'react-router-dom';
import { SearchQuery } from '../graphql';
import Card from './Card';
import SearchInput from './SearchInput';

const NavBar: React.StatelessComponent = () => {
  return (
    <Card className="NavBar">
      <div className="NavBar__inner">
        <Link className="NavBar__home" data-testid="nav-home" to="/">
          StockEx
        </Link>
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
