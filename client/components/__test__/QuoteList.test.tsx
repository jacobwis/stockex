import 'jest-enzyme';
import * as React from 'react';
import { shallow } from 'enzyme';
import QuoteList, { QuoteListItem } from '../QuoteList';

const mockQuote = {
  changePercent: 0.53,
  companyName: 'Apple Inc.',
  latestPrice: 143.3,
  symbol: 'AAPL'
};

const mockQuoteWithNegativeChange = {
  changePercent: -6.2,
  companyName: 'Facebook Inc.',
  latestPrice: 143.3,
  symbol: 'FB'
};

const mockQuotes = [
  mockQuote,
  mockQuoteWithNegativeChange,
  {
    changePercent: 14.24,
    companyName: 'ACME Inc.',
    latestPrice: 10.2,
    symbol: 'ACME'
  }
];

describe('<QuoteList />', () => {
  it('should render a QuoteListItem for each quote passed', () => {
    const list = shallow(<QuoteList quotes={mockQuotes} />);
    expect(list.find(QuoteListItem).length).toEqual(3);
  });
});

describe('<QuoteListItem />', () => {
  it('should render an anchor element', () => {
    const item = shallow(<QuoteListItem quote={mockQuote} />);
    expect(item).toHaveTagName('a');
  });

  it('the anchor element have an href equal to the quotes symbol', () => {
    const item = shallow(<QuoteListItem quote={mockQuote} />);
    expect(item).toHaveProp('href', `/${mockQuote.symbol}`);
  });
});
