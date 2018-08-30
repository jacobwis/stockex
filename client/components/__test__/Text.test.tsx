import 'jest-enzyme';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Text from '../Text';

describe('<Text />', () => {
  it('should have the class ".Text--light" if "props.color" equals "light"', () => {
    const textEl = shallow(<Text color="light" />);
    expect(textEl).toHaveClassName('Text--light');
  });

  it('should have the class ".Text--blue" if "props.color" equals "blue"', () => {
    const textEl = shallow(<Text color="blue" />);
    expect(textEl).toHaveClassName('Text--blue');
  });

  it('should have the class ".Text--green" if "props.color" equals "green"', () => {
    const textEl = shallow(<Text color="green" />);
    expect(textEl).toHaveClassName('Text--green');
  });

  it('should have the class ".Text--red" if "props.color" equals "red"', () => {
    const textEl = shallow(<Text color="red" />);
    expect(textEl).toHaveClassName('Text--red');
  });

  it('should render "props.children"', () => {
    const children = <span>This is a child element</span>;

    const textEl = shallow(<Text> {children} </Text>);

    expect(textEl).toContainReact(children);
  });

  it('should have the class "Text"', () => {
    const textEl = shallow(<Text />);

    expect(textEl).toHaveClassName('Text');
  });

  it('should pass "props.className" to the element', () => {
    const textEl = shallow(<Text className="CustomClass" />);
    expect(textEl).toHaveClassName('CustomClass');
  });

  it('"props.element" should be "p" by default', () => {
    const textEl = mount(<Text />);

    expect(textEl).toHaveProp('element', 'p');
  });

  it('should render the html tag corresponding to "props.element"', () => {
    const textEl = shallow(<Text element="h1" />);

    expect(textEl).toHaveTagName('h1');
  });

  it('should render custom components passed to "props.element"', () => {
    const Heading = () => <h1>Heading</h1>;
    const textEl = shallow(<Text element={Heading} />);
    expect(textEl).toHaveTagName('Heading');
  });

  it('"props.size" should be "body" by default', () => {
    const textEl = mount(<Text />);
    expect(textEl).toHaveProp('size', 'body');
  });

  it('should have the class ".Text--sm" if "props.size" equals "sm"', () => {
    const textEl = shallow(<Text size="sm" />);
    expect(textEl).toHaveClassName('Text--sm');
  });

  it('should have the class ".Text--body" if "props.size" equals "body"', () => {
    const textEl = shallow(<Text size="body" />);
    expect(textEl).toHaveClassName('Text--body');
  });

  it('should have the class ".Text--md" if "props.size" equals "md"', () => {
    const textEl = shallow(<Text size="md" />);
    expect(textEl).toHaveClassName('Text--md');
  });

  it('should have the class ".Text--lg" if "props.size" equals "lg"', () => {
    const textEl = shallow(<Text size="lg" />);
    expect(textEl).toHaveClassName('Text--lg');
  });

  it('should have the class ".Text--xl" if "props.size" equals "xl"', () => {
    const textEl = shallow(<Text size="xl" />);
    expect(textEl).toHaveClassName('Text--xl');
  });

  it('should have the class ".Text--truncate" if "props.truncate" equals true', () => {
    const textEl = shallow(<Text truncate />);
    expect(textEl).toHaveClassName('Text--truncate');
  });

  it('"props.weight" should be "regular" by default', () => {
    const textEl = mount(<Text />);
    expect(textEl).toHaveProp('weight', 'regular');
  });

  it('should have the class ".Text--regular" if "props.weight" equals "regular"', () => {
    const textEl = shallow(<Text weight="regular" />);
    expect(textEl).toHaveClassName('Text--regular');
  });

  it('should have the class ".Text--medium" if "props.weight" equals "medium"', () => {
    const textEl = shallow(<Text weight="medium" />);
    expect(textEl).toHaveClassName('Text--medium');
  });

  it('should have the class ".Text--bold" if "props.weight" equals "bold"', () => {
    const textEl = shallow(<Text weight="bold" />);
    expect(textEl).toHaveClassName('Text--bold');
  });

  it('should pass "props.testID" to the element', () => {
    const textEl = shallow(<Text testID="text-1" />);
    expect(textEl).toHaveProp('data-testid', 'text-1');
  });
});
