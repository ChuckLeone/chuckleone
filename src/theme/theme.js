import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#63ccff',
      light: '#ffffff',
    },
  },
  root: {
    body: {
      backgroundColor: 'red',
    },
  },
  action: {
    active: 'rgba(0, 0, 0, 0.13)',
    hover: 'rgba(100, 100, 100, 0.75),',
  },
  shadows: [0],
  container: {
    padding: 20,
  },
  menu: {
    position: 'absolute',
  },
  overrides: {
    MuiToolbar: {
      root: {
        color: '#efe',
        paddingLeft: '0 !important',
        marginLeft: 0,
        backgroundColor: '#222',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#111',
        color: '#e2e2e2',
        boxShadow: 0,
        top: 30,
      },
    },
  },
  card: {
    margin: 5,
  },
});

export default theme;
