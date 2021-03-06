import Paper from '@material-ui/core/Paper';
import React from 'react';
import styles from '../../styles/Card.module.css';
import clsx from 'clsx';

interface IProps {
  disabled?: boolean;
  className?: string;
}

const Card: React.FC<IProps> = ({
  children,
  disabled = false,
  className = '',
}) => {
  const { card, disabled: dClass } = styles;

  return (
    <Paper className={clsx(card, className)}>
      {children}
      <div className={clsx({ [dClass]: disabled })} id="test" />
    </Paper>
  );
};

export default Card;
