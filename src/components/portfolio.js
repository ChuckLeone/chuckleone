import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function Portfolio(props) {
  return (
    <Grid container style={props.theme.container}>
      <Grid item xs={12}>
        <h2>Portfolio</h2>
      </Grid>
      <Grid item xs={12}>
        <p>This area will feature portfolio</p>
      </Grid>
    </Grid>
  );
}

export default withTheme()(Portfolio);
