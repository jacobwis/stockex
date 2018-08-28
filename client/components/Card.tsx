import * as React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  round?: boolean;
}

const Card: React.StatelessComponent<Props> = props => {
  const classStr = cn('Card', props.className, {
    Card__round: props.round
  });

  return <div className={classStr}>{props.children}</div>;
};

export default Card;
