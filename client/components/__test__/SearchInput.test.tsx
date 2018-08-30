import 'jest-enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import SearchInput from '../SearchInput';

const mockResults = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'GOOGL', name: 'Alphabet' }
];

describe('<SearchInput />', () => {
  it('"state.isFocused" should equal true when the input is focused', () => {
    const wrapper = shallow(<SearchInput />);

    wrapper.find('[data-testid="search-input"]').simulate('focus');

    expect(wrapper).toHaveState('isFocused', true);
  });

  it('.SearchInput should have the class .SearchInput--focused if "state.isFocused" equals true', () => {
    const wrapper = shallow(<SearchInput />);

    wrapper.find('[data-testid="search-input"]').simulate('focus');

    expect(wrapper.find('.SearchInput')).toHaveClassName(
      'SearchInput--focused'
    );
  });

  it('the input elements value should equal "state.query"', () => {
    const wrapper = shallow(<SearchInput />);
    wrapper.setState({ query: 'AAPL' });

    expect(wrapper.find('[data-testid="search-input"]')).toHaveValue('AAPL');
  });

  it('"state.query" should update on the input elements change event', () => {
    const wrapper = shallow(<SearchInput />);

    wrapper.find('[data-testid="search-input"]').simulate('change', {
      target: {
        value: 'GOOGL'
      }
    });

    expect(wrapper).toHaveState('query', 'GOOGL');
  });

  it('should call "props.onChange" on the input elements event', () => {
    const fn = jest.fn();
    const wrapper = shallow(<SearchInput onChange={fn} />);

    wrapper.find('[data-testid="search-input"]').simulate('change', {
      target: {
        value: 'GOOGL'
      }
    });

    expect(fn).toHaveBeenCalledWith('GOOGL');
  });

  it('should not show the search results if "props.searchResults" is undefined and "state.isFocused" is false', () => {
    const wrapper = shallow(<SearchInput />);

    const searchResults = wrapper.find('[data-testid="search-results"]');
    expect(searchResults.exists()).toEqual(false);
  });

  it('should not show the search results if "props.searchResults" is undefined but "state.isFocused" is true', () => {
    const wrapper = shallow(<SearchInput />);
    wrapper.setState({ isFocused: true });

    const searchResults = wrapper.find('[data-testid="search-results"]');
    expect(searchResults.exists()).toEqual(false);
  });

  it('should not show the search results if "props.searchResults" is defined and "state.isFocused" is false', () => {
    const wrapper = shallow(<SearchInput searchResults={mockResults} />);
    wrapper.setState({ isFocused: false });

    const searchResults = wrapper.find('[data-testid="search-results"]');

    expect(searchResults.exists()).toEqual(false);
  });

  it('should show the search results if "props.searchResults" is defined and "state.isFocused" is true', () => {
    const wrapper = shallow(<SearchInput searchResults={mockResults} />);
    wrapper.setState({ isFocused: true });

    const searchResults = wrapper.find('[data-testid="search-results"]');

    expect(searchResults.exists()).toEqual(true);
  });

  it('the search results container should render a link for each result', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchInput searchResults={mockResults} />
      </MemoryRouter>
    );
    wrapper.setState({ isFocused: true });

    const searchResults = wrapper.find('.SearchInput__result');

    searchResults.forEach((el, i) => {
      const mockResult = mockResults[i];
      expect(el).toHaveTagName('a');
      expect(el).toHaveProp('href', `/${mockResult.symbol}`);
      expect(el).toHaveText(`${mockResult.symbol} - ${mockResult.name}`);
    });
  });
});
