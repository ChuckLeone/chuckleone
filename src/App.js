import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Theme from '../src/theme/theme';
import Index from './components/index';
import Links from './components/links';
import Year from './components/year';

const stylesheet = {
  headerImage: {
    height: '30vh',
    background: 'center bottom',
    backgroundImage: 'url(img/renders/low-poly-0.png)',
    backgroundSize: 'cover',
    padding: '20% 0',
    textAlign: 'center',
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
    color: '#fff',
    height: '5vh',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: '2px solid #90614f',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                      <Grid item xs={12} style={stylesheet.headerImage}>
                      <Button href="/garden360/" variant="outlined" color="primary" size="large" style={stylesheet.button}>Enter the VR garden</Button>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Typography variant="h3">About Me</Typography>
                          <Index />
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