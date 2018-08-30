import * as React from 'react';
import Card from './Card';
import SearchInput from './SearchInput';

const NavBar: React.StatelessComponent = () => {
  return (
    <Card className="NavBar">
      <div className="NavBar__inner">
        <SearchInput />
      </div>
    </Card>
  );
};

export default NavBar;
