import * as React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const MainLayout: React.StatelessComponent = props => {
  return (
    <div className="MainLayout">
      <NavBar />
      <div className="MainLayout__content">{props.children}</div>
      <div className="MainLayout__footer">
        <Link className="MainLayout__footer-link" to="/about">
          About
        </Link>

        <a
          className="MainLayout__footer-icon-link"
          href="https://github.com/wisniewskij26/stockex"
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
