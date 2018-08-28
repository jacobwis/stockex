import * as React from 'react';
import cn from 'classnames';
import Text from './Text';

interface Props {
  change: number;
}

const ChangePill: React.StatelessComponent<Props> = props => {
  const classStr = cn('ChangePill', {
    'ChangePill--positive': props.change >= 0,
    'ChangePill--negative': props.change < 0
  });

  const textColor = props.change >= 0 ? 'green' : 'red';

  return (
    <div className={classStr}>
      <Text color={textColor} size="sm" weight="medium">
        {props.change.toFixed(2)}%
      </Text>
    </div>
  );
};

export default ChangePill;
