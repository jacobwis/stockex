import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  it('should have the class "Card"', () => {
    const card = shallow(<Card />);

    expect(card).toHaveClassName('Card');
  });

  it('should render "props.children"', () => {
    const card = shallow(
      <Card>
        <p>This is a card</p>
      </Card>
    );
    expect(card).toContainReact(<p>This is a card</p>);
  });

  it('should pass "props.className" to the element', () => {
    const card = shallow(<Card className="CustomClass" />);

    expect(card).toHaveClassName('CustomClass');
  });

  it('should have the class "Card__round" if "props.round" equals true', () => {
    const card = shallow(<Card round />);

    expect(card).toHaveClassName('Card__round');
  });
});
