import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';

describe('<Heading />', () => {
  it('should run tests', () => {
    const Heading = () => <h1>Hey!</h1>;
    const el = shallow(<Heading />);

    expect(el).toHaveText('Hey!');
  });
});
