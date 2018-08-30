import * as React from 'react';
import cn from 'classnames';
import { List } from 'react-virtualized';
import { SearchResult } from '../graphql';
import Text from './Text';

interface Props {
  onChange?: (value: string) => void;
  searchResults?: SearchResult[];
}

interface State {
  isFocused: boolean;
  query: string;
}

class SearchInput extends React.Component<Props, State> {
  public state = {
    isFocused: false,
    query: ''
  };

  public handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    const wrapper = document.getElementById('wrapper');
    // @ts-ignore
    if (!wrapper.contains(e.target)) {
      this.onBlur();
    }
  };

  public onBlur = () => {
    this.setState({ isFocused: false, query: '' });
    this.props.onChange && this.props.onChange('');
    // @ts-ignore
    document.removeEventListener('click', this.handleClickOutside);
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState(() => ({ query: value }));

    this.props.onChange && this.props.onChange(value);
  };

  public onFocus = () => {
    this.setState(() => ({
      isFocused: true
    }));

    // @ts-ignore
    document.addEventListener('click', this.handleClickOutside);
  };

  public render() {
    const { searchResults } = this.props;
    const { isFocused, query } = this.state;

    const shouldShowResults = searchResults && isFocused;
    const menuHeight =
      searchResults &&
      (searchResults.length > 4 ? 200 : searchResults.length * 48);

    const classStr = cn('SearchInput', {
      'SearchInput--focused': isFocused
    });

    return (
      <div className="SearchInput__wrapper" id="wrapper">
        <div className={classStr}>
          <input
            className="SearchInput__input"
            data-testid="search-input"
            onChange={this.onChange}
            onFocus={this.onFocus}
            placeholder="Search"
            type="text"
            value={query}
          />
          {shouldShowResults && (
            <div className="SearchInput__results" data-testid="search-results">
              <List
                height={menuHeight}
                rowHeight={48}
                rowCount={searchResults.length}
                width={300}
                rowRenderer={({ key, index, style }) => {
                  const result = searchResults[index];
                  return (
                    <a
                      className="SearchInput__result"
                      key={key}
                      href={`/${result.symbol}`}
                      style={style}
                    >
                      <Text color="light" truncate>
                        <Text weight="medium" element="span">
                          {result.symbol}
                        </Text>
                        {result.name && ` - ${result.name}`}
                      </Text>
                    </a>
                  );
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchInput;
