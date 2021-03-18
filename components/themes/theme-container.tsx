import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import getTheme from './main-theme';

const ThemeContainer: React.FunctionComponent<{}> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = getTheme(true);

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default ThemeContainer;
