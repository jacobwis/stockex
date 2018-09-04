import * as React from 'react';
import * as numeral from 'numeral';
import { Stock } from '../graphql';
import Text from './Text';

const renderItem = (label: string, value: string | number) => {
  return (
    <div className="StatTable__item">
      <Text size="sm" color="light">
        {label}
      </Text>
      <Text size="md" weight="medium">
        {value}
      </Text>
    </div>
  );
};

interface Props {
  stock: Stock;
}

const StatTable: React.StatelessComponent<Props> = ({ stock }) => {
  return (
    <div className="StatTable">
      {renderItem('Open', stock.open ? stock.open.toFixed(2) : '-')}
      {renderItem('High', stock.high ? stock.high.toFixed(2) : '-')}
      {renderItem('Low', stock.low ? stock.low.toFixed(2) : '-')}
      {renderItem('Volume', numeral(stock.volume).format('0.0a'))}
      {renderItem(
        'Average Volume',
        numeral(stock.averageVolume).format('0.0a')
      )}
      {renderItem(
        'Yield',
        stock.dividendYield ? stock.dividendYield.toFixed(2) : '-'
      )}
      {renderItem('52 Week High', stock.week52High)}
      {renderItem('52 Week Low', stock.week52Low)}
      {renderItem('Market Cap', numeral(stock.marketCap).format('0.0a'))}
      {renderItem('P/E Ratio', stock.peRatio ? stock.peRatio.toFixed(2) : '-')}
    </div>
  );
};

export default StatTable;
