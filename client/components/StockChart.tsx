import * as React from 'react';
import cn from 'classnames';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis
} from 'recharts';
import { ChartQuery } from '../graphql';

const ranges = ['1D', '1M', '3M', '6M', 'YTD', '1Y', '2Y', '5Y'];

interface Props {
  symbol: string;
}

interface State {
  selectedRange: string;
  timedOut: boolean;
}

class StockChart extends React.Component<Props, State> {
  public state = {
    selectedRange: '1D',
    timedOut: false
  };

  public onRangeSelect = (selectedRange: string) => {
    this.setState({ selectedRange, timedOut: false });
    this.waitForTimeout();
  };

  public waitForTimeout = () => {
    setTimeout(() => {
      this.setState({ timedOut: true });
    }, 300);
  };

  public componentDidMount() {
    this.waitForTimeout();
  }

  public render() {
    const { symbol } = this.props;
    const { selectedRange, timedOut } = this.state;
    return (
      <div>
        <ChartQuery range={selectedRange} symbol={symbol}>
          {({ data, networkStatus }) => {
            const chartData = data.chartFromSymbol;
            if (!chartData || (timedOut && networkStatus === 2)) {
              return (
                <div className="StockChart__loading">
                  {timedOut && <i className="far fa-spin fa-spinner-third" />}
                </div>
              );
            }

            return (
              <ResponsiveContainer height={400} width="100%">
                <LineChart data={chartData}>
                  <Tooltip cursor={false} isAnimationActive={false} />
                  <Line
                    isAnimationActive={false}
                    dataKey="value"
                    dot={false}
                    type="monotone"
                    strokeWidth={2}
                    stroke="#4ea3f2"
                    name="Price"
                  />
                  <YAxis hide domain={['auto', 'auto']} />
                  <XAxis dataKey="label" hide />
                </LineChart>
              </ResponsiveContainer>
            );
          }}
        </ChartQuery>
        <div className="StockChart__buttons">
          {ranges.map(range => {
            const btnClass = cn('StockChart__button', {
              'StockChart__button--selected': range === selectedRange
            });

            return (
              <button
                className={btnClass}
                data-testid={`stock-chart-button-${range}`}
                key={range}
                onClick={() => this.onRangeSelect(range)}
              >
                {range}
              </button>
            );
          })}
          {/* <button
            data-testid="stock-chart-button-1D"
            className="StockChart__button"
          >
            1D
          </button>
          <button className="StockChart__button">1M</button>
          <button className="StockChart__button">3M</button>
          <button className="StockChart__button">6M</button>
          <button className="StockChart__button">YTD</button>
          <button className="StockChart__button">1Y</button>
          <button className="StockChart__button">3Y</button>
          <button className="StockChart__button">5Y</button>
        </div> */}
        </div>
      </div>
    );
  }
}

export default StockChart;
