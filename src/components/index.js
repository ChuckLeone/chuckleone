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
          maintaining software and user interfaces for a multitude of platforms
          and devices including web based applications as well as native apps
          for Windows, Android, iOS, Google Cardboard, GearVR and more. The
          projects listed in my portfolio range from interactive video games and
          entertainment applications to business and utilities.
        </p>
        <p>
          I am actively working on next generation platforms and immerging
          technologies including virtual reality experiences for desktop and
          mobile, drone technology and industrial product design for 3D
          printing.
        </p>
      </Grid>
    </Grid>
  );
}

export default withTheme()(Index);
