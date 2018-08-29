import * as React from 'react';
import cn from 'classnames';

interface Props {
  color?: 'light' | 'blue' | 'red' | 'green';
  className?: string;
  element?: string | React.ComponentType;
  size?: 'sm' | 'body' | 'md' | 'lg' | 'xl';
  truncate?: boolean;
  weight?: 'regular' | 'medium' | 'bold';
}

const Text: React.StatelessComponent<Props> = props => {
  const classStr = cn('Text', props.className, {
    'Text--light': props.color === 'light',
    'Text--blue': props.color === 'blue',
    'Text--red': props.color === 'red',
    'Text--green': props.color === 'green',
    'Text--sm': props.size === 'sm',
    'Text--body': props.size === 'body',
    'Text--md': props.size === 'md',
    'Text--lg': props.size === 'lg',
    'Text--xl': props.size === 'xl',
    'Text--truncate': props.truncate,
    'Text--regular': props.weight === 'regular',
    'Text--medium': props.weight === 'medium',
    'Text--bold': props.weight === 'bold'
  });

  const TAG = props.element;

  return <TAG className={classStr}>{props.children}</TAG>;
};

Text.defaultProps = {
  element: 'p',
  size: 'body',
  weight: 'regular'
};

export default Text;
