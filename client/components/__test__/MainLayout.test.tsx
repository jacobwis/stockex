import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('<MainLayout />', () => {
  it('should have the class "MainLayout"', () => {
    const mainLayout = shallow(<MainLayout />);
    expect(mainLayout).toHaveClassName('MainLayout');
  });

  it('should render "props.children" in the content div', () => {
    const children = (
      <div>
        <h1>Main Layout Child</h1>
      </div>
    );

    const mainLayout = shallow(<MainLayout>{children}</MainLayout>);
    expect(mainLayout.find('.MainLayout__content')).toContainReact(children);
  });
});
