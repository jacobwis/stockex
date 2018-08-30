import 'jest-enzyme';
import * as React from 'react';
import { mount } from 'enzyme';
import StockView from '../StockView';

const mockStock = {
  companyName: 'Apple Inc.',
  symbol: 'AAPL',
  description:
    'Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.',
  latestPrice: 227.3,
  changePercent: 1.963,
  open: 223.25,
  high: 227.32,
  low: 222.4,
  volume: 26188140,
  averageVolume: 26792364,
  dividendYield: 1.3095344,
  week52High: 227.35,
  week52Low: 149.16,
  marketCap: 1098083676100,
  peRatio: 21.94
};

describe('<StockView />', () => {
  it('the element displaying the stocks change percent should have the class .Text--green if "stock.changePercent" is positive', () => {
    const wrap = mount(<StockView stock={mockStock} />);
    expect(wrap.find('[data-testid="change-percent"]')).toHaveClassName(
      '.Text--green'
    );
  });

  it('the element displaying the stocks change percent should have the class .Text--red if "stock.changePercent" is negative', () => {
    const wrap = mount(
      <StockView
        stock={{
          ...mockStock,
          changePercent: -0.12
        }}
      />
    );
    expect(wrap.find('[data-testid="change-percent"]')).toHaveClassName(
      '.Text--red'
    );
  });

  it('the element displaying the stocks change percent should be properly formatted', () => {
    const wrap = mount(<StockView stock={mockStock} />);
    expect(wrap.find('[data-testid="change-percent"]')).toHaveText('1.96%');
  });

  it('the element displaying the stocks price should be properly formated', () => {
    const wrap = mount(<StockView stock={mockStock} />);
    expect(wrap.find('[data-testid="latest-price"]')).toHaveText('227.30');
  });
});
