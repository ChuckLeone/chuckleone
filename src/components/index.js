import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Index(props) {
  return (
    <Grid container style={props.theme.container}>
      <Grid item xs={12}>
        <Typography variant="h2">Designer. Developer. Musician.</Typography>
      </Grid>
      <Grid item xs={12}>
        <p>
          For over 20 years, I have been professionaly designing, developing and
          maintaining software for a multitude of platforms including web based
          applications as well as native apps for Windows, Android, iOS, Google
          Cardboard, GearVR and more. The projects listed in my portfolio range
          from interactive video games and entertainment to business and
          utilities. I have been active in working on next generation platforms
          such as virtual reality, drone technology and 3D printing.
        </p>
      </Grid>
    </Grid>
  );
}

export default withTheme()(Index);
