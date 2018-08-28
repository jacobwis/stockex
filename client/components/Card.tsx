import * as React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

const Card: React.StatelessComponent<Props> = props => {
  const classStr = cn('Card', props.className);
  return <div className={classStr}>{props.children}</div>;
};

export default Card;
