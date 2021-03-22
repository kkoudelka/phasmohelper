import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from '../../styles/MainLayout.module.css';
import React from 'react';
import { getTheme } from '../themes';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme = getTheme()) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

const MainLayout: React.FC = ({ children }) => {
  const { content, toolbar } = useStyles();

  return (
    <div className={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Link href="/">
            <a>
              <Typography variant="h6" noWrap>
                PhasmoHelper
              </Typography>
            </a>
          </Link>
          <div className={styles.grow} />
        </Toolbar>
      </AppBar>
      <main className={content}>
        <div className={toolbar} />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
