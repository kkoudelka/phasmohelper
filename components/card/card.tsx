import Paper from '@material-ui/core/Paper';
import React from 'react';
import styles from '../../styles/Card.module.css';

const Card: React.FC = ({ children }) => {
  return <Paper className={styles.card}>{children}</Paper>;
};

export default Card;
