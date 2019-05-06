import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function Index(props) {
  return (
    <Grid container style={props.theme.container}>
      <Grid item xs={12}>
        <h2>About Me</h2>
      </Grid>
      <Grid item xs={12}>
        <p>Welcome</p>
      </Grid>
    </Grid>
  );
}

export default withTheme()(Index);
