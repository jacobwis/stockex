import * as React from 'react';
import NavBar from './NavBar';

const MainLayout: React.StatelessComponent = props => {
  return (
    <div className="MainLayout">
      <NavBar />
      <div className="MainLayout__content">{props.children}</div>
    </div>
  );
};

export default MainLayout;
