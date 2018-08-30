import * as React from 'react';
import cn from 'classnames';
import { debounce } from 'lodash';
import { List } from 'react-virtualized';
import { SearchQuery } from '../graphql';
import Text from './Text';

interface State {
  query: string;
  isFocused: boolean;
}

class SearchInput extends React.Component<{}, State> {
  public state = {
    query: '',
    isFocused: false
  };

  public debouncedOnChange = debounce((value: string) => {
    this.setState(() => ({ query: value }));
  }, 200);

  public handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    const wrapper = document.getElementById('wrapper');
    // @ts-ignore
    if (!wrapper.contains(e.target)) {
      this.onBlur();
    }
  };

  public onBlur = () => {
    this.setState({ isFocused: false, query: '' });
    // @ts-ignore
    document.removeEventListener('click', this.handleClickOutside);
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.debouncedOnChange(value);
  };

  public onFocus = () => {
    this.setState({ isFocused: true });
    // @ts-ignore
    document.addEventListener('click', this.handleClickOutside);
  };

  public render() {
    const classStr = cn('SearchInput', {
      'SearchInput--focused': this.state.isFocused
    });

    return (
      <SearchQuery q={this.state.query}>
        {({ data }) => {
          const results = data.search;
          const shouldShowResults = results && this.state.isFocused;
          const menuHeight =
            results && (results.length > 4 ? 200 : results.length * 48);
          return (
            <div className="SearchInput__wrapper" id="wrapper">
              <div className={classStr}>
                <input
                  className="SearchInput__input"
                  type="text"
                  onChange={this.onChange}
                  onFocus={this.onFocus}
                  placeholder="Search"
                />
                {shouldShowResults && (
                  <div className="SearchInput__results">
                    <List
                      height={menuHeight}
                      rowHeight={48}
                      rowCount={results.length}
                      width={300}
                      rowRenderer={({ key, index, style }) => {
                        const result = results[index];
                        return (
                          <a
                            className="SearchInput__result"
                            key={key}
                            href="#"
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
        }}
      </SearchQuery>
    );
  }
}

export default SearchInput;
