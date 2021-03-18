import {
  makeStyles,
  Theme,
  createStyles,
  CssBaseline,
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { getTheme } from '../themes';

const drawerWidth = 180;

const useStyles = makeStyles((theme: Theme = getTheme()) =>
  createStyles({
    root: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    appBar: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width: '100%',
      marginLeft: drawerWidth,
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

const MainLayout: React.FC = ({ children }) => {
  const { content, toolbar, root, grow, appBar } = useStyles();

  return (
    <div className={root}>
      <CssBaseline />
      <AppBar position="fixed" className={appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Phasmophobia Cheatsheet
          </Typography>
          <div className={grow} />
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
