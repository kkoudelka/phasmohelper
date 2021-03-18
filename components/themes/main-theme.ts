import { createMuiTheme, Theme } from '@material-ui/core';

const getTheme = (useDark: boolean = true): Theme => {
  const mainTheme = createMuiTheme({
    palette: {
      type: useDark ? 'dark' : 'light',
      primary: {
        main: '#ff6600',
        light: '#ff6600',
        dark: '#ff6600',
        contrastText: '#ffffff',
      },
    },
  });

  return mainTheme;
};

export default getTheme;
