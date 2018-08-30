import * as React from 'react';
import { Link } from 'react-router-dom';
import { Quote } from '../graphql';
import Text from './Text';
import ChangePill from './ChangePill';

export const QuoteListItem: React.StatelessComponent<{ quote: Quote }> = ({
  quote
}) => {
  return (
    <Link className="QuoteList__item" to={`/${quote.symbol}`}>
      <div className="QuoteList__info">
        <Text weight="medium">{quote.symbol}</Text>
        <Text color="light" size="sm" truncate>
          {quote.companyName}
        </Text>
      </div>
      <ChangePill change={quote.changePercent} />
    </Link>
  );
};

interface Props {
  quotes: Quote[];
}

const QuoteList: React.StatelessComponent<Props> = props => {
  return (
    <div className="QuoteList">
      {props.quotes &&
        props.quotes.map(quote => (
          <QuoteListItem quote={quote} key={quote.symbol} />
        ))}
    </div>
  );
};

export default QuoteList;
