import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Index(props) {
  return (
    <Grid container spacing={24} style={props.theme.container}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Design Develop Release
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          For over 20 years, I have been professionaly designing, developing and
          maintaining software and user interfaces for a multitude of platforms
          and devices including web based applications as well as native apps
          for Windows, Android, iOS, Google Cardboard, GearVR and more. The
          projects listed in my portfolio range from interactive video games and
          entertainment applications to business and utilities.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am actively working on next generation platforms and immerging
          technologies including virtual reality experiences for desktop and
          mobile, drone technology and industrial product design for 3D
          printing.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Latest
        </Typography>
        <Grid container />
      </Grid>
    </Grid>
  );
}

export default withTheme()(Index);
