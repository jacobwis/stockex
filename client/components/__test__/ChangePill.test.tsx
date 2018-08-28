import 'jest-enzyme';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import ChangePill from '../ChangePill';

describe('<ChangePill />', () => {
  it('should have the class "ChangePill"', () => {
    const changePill = shallow(<ChangePill change={12} />);
    expect(changePill).toHaveClassName('ChangePill');
  });

  it('should have the class "ChangePill--positive" if "props.change" is a positive number', () => {
    const changePill = shallow(<ChangePill change={12} />);
    expect(changePill).toHaveClassName('ChangePill--positive');
  });

  it('should have the class "ChangePill--positive" if "props.change" is zero', () => {
    const changePill = shallow(<ChangePill change={0} />);
    expect(changePill).toHaveClassName('ChangePill--positive');
  });

  it('should have the class "ChangePill--negative" if "props.change" is a negative number', () => {
    const changePill = shallow(<ChangePill change={-0.53} />);
    expect(changePill).toHaveClassName('ChangePill--negative');
  });

  it('should display "props.change" as a formatted percentage', () => {
    const changePill = mount(<ChangePill change={12.53} />);
    expect(changePill).toHaveText('12.53%');
  });

  it('should round "props.change" to the nearest hundredth', () => {
    const changePill = mount(<ChangePill change={12.538} />);
    expect(changePill).toHaveText('12.54%');
  });

  it('should pass color="green" to the Text component if "props.change" is greater than zero', () => {
    const changePill = shallow(<ChangePill change={12} />);
    expect(changePill.find('Text')).toHaveProp('color', 'green');
  });

  it('should pass color="green" to the Text component if "props.change" is  zero', () => {
    const changePill = shallow(<ChangePill change={0} />);
    expect(changePill.find('Text')).toHaveProp('color', 'green');
  });

  it('should pass color="red" to the Text component if "props.change" is less than zero', () => {
    const changePill = shallow(<ChangePill change={-12.53} />);
    expect(changePill.find('Text')).toHaveProp('color', 'red');
  });
});
