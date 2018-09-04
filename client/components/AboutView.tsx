import * as React from 'react';
import Card from './Card';
import Text from './Text';

const AboutView: React.StatelessComponent = () => {
  return (
    <Card className="AboutView" round>
      <Text size="lg" weight="bold">
        About StockEx
      </Text>
      <Text className="AboutView__text">
        StockEx is a React application built by{' '}
        <a className="AboutView__link" href="https://github.com/wisniewskij26">
          Jacob Wisniewski
        </a>
        , with data pulled from the{' '}
        <a className="AboutView__link" href="https://iextrading.com/developer/">
          IEX Developer API
        </a>
        .
      </Text>
      <Text>
        View code on{' '}
        <a
          href="https://github.com/wisniewskij26/stockex"
          className="AboutView__link"
        >
          GitHub
        </a>
      </Text>
    </Card>
  );
};

export default AboutView;
