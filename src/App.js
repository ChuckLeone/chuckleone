import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Theme from '../src/theme/theme';
import Index from './components/index';
import Links from './components/links';
import Year from './components/year';

const stylesheet = {
  headerImage: {
    height: '30vh',
    background: 'right bottom',
    backgroundImage: 'url(img/renders/low-poly-4.png)',
    backgroundSize: 'cover',
  },
  headerLeft: {
    backgroundColor: '#040303',
  },
  headerRight: {
    backgroundColor: '#040303',
  },
  footer: {
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#1f1b1b',
    color: '#737373',
    height: '5vh',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  }
};

export default function App() {
    return (
      <MuiThemeProvider theme={Theme}>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6} style={stylesheet.headerLeft}>
                      <Typography variant="h1">Chuck Leone</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} style={stylesheet.headerRight}>
                      <Typography variant="h2">Art | Design | Development</Typography>
                      </Grid>
                      <Grid item xs={12} style={stylesheet.headerImage} />
                      <Grid item xs={12} sm={8}>
                        <Typography variant="h3">About Me</Typography>
                        <Typography variant="body1">
                          <Index />
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography variant="h3">Links</Typography>
                       <Links />
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item xs={12} sm={12} style={stylesheet.footer}>
                &copy; Copyright <Year /> Chuck Leone
              </Grid>
            </Grid>
          </div>
      </MuiThemeProvider>
    );
};