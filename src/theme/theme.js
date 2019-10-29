import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h1: {
      color: '#d5d5d5 !important',
      fontSize: '2rem !important',
      padding: 10,
      textTransform: 'uppercase !important',
    },
    h2: {
      color: '#d5d5d5 !important',
      fontSize: '1.25rem !important',
      padding: 10,
      fontWeight: '400 !important',
      textTransform: 'uppercase',
      textAlign: 'right',
      lineHeight: 2,
    },
    h3: {
      color: '#d5d5d5 !important',
      fontSize: '1.15rem !important',
      padding: 10,
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    body1: {
      padding: 10,
      color: '#d5d5d5 !important',
    },
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
  siteHeaderRight: {
    backgroundColor: '#006494',
    paddingTop: 20,
    paddingRight: 5,
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
