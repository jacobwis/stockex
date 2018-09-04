import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import StockChart from '../StockChart';

describe('<StockChart />', () => {
  it('the selected range button should have the class "StockChart__button--selected"', () => {
    const wrap = shallow(<StockChart symbol="AAPL" />);
    const btn = wrap.find('[data-testid="stock-chart-button-1D"]');

    expect(btn).toHaveClassName('StockChart__button--selected');
  });

  it('clicking a range button should select the range', () => {
    const wrap = shallow(<StockChart symbol="AAPL" />);

    const btn = wrap.find('[data-testid="stock-chart-button-YTD"]');
    btn.simulate('click');
    expect(wrap.find('[data-testid="stock-chart-button-YTD"]')).toHaveClassName(
      'StockChart__button--selected'
    );
  });
});
