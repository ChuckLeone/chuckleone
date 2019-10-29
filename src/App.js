import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Theme from '../src/theme/theme';
import Index from './components/index';

const stylesheet = {
  headerImage: {
    height: '10vh',
    backgroundImage: 'url(img/2d/abstract_glass_phobos.jpg)',
    backgroundSize: 'cover',
  },
};

export default function App() {
    return (
      <MuiThemeProvider theme={Theme}>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h1">Chuck Leone</Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <Typography variant="h2">Art | Design | Development</Typography>
                      </Grid>
                      <Grid item xs={12} style={stylesheet.headerImage} />
                      <Grid item xs={12}>
                        <Typography variant="h3">About Me</Typography>
                        <Typography variant="body1">
                          <Index />
                        </Typography>
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </div>
      </MuiThemeProvider>
    );
};