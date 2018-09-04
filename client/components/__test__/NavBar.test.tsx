import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should render a Card component', () => {
    const navBar = shallow(<NavBar />);

    expect(navBar).toHaveTagName('Card');
  });

  it('should have the class "NavBar"', () => {
    const navBar = shallow(<NavBar />);

    expect(navBar).toHaveClassName('NavBar');
  });

  it('should have a link to the home page', () => {
    const navBar = shallow(<NavBar />);
    expect(navBar.find('[data-testid="nav-home"]')).toHaveProp('to', '/');
  });
});
