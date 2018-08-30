import * as React from 'react';
import cn from 'classnames';
import { Stock } from '../graphql';
import Card from './Card';
import Text from './Text';
import NewsList from './NewsList';
import StatTable from './StatTable';

interface Props {
  stock: Stock;
}

class StockView extends React.Component<Props> {
  public render() {
    const { stock } = this.props;
    const changeColor = stock.changePercent >= 0 ? 'green' : 'red';
    return (
      <Card className="StockView" round>
        <div className="StockView__header">
          <div>
            <Text size="lg" weight="bold">
              {stock.companyName}
            </Text>
            <Text color="light">{stock.symbol}</Text>
          </div>
          <div className="StockView__change">
            <Text testID="latest-price" size="xl" weight="bold">
              {stock.latestPrice.toFixed(2)}
            </Text>
            <Text testID="change-percent" color={changeColor}>
              {stock.changePercent.toFixed(2)}%
            </Text>
          </div>
        </div>
        <div className="StockView__chart" />
        <Text className="StockView__description">{stock.description}</Text>
        <div className="StockView__stats">
          <StatTable stock={stock} />
        </div>
        <div className="StockView__news">
          <Text className="StockView__heading" size="lg" weight="medium">
            Latest News
          </Text>
          <NewsList news={stock.news} />
        </div>
      </Card>
    );
  }
}

export default StockView;
