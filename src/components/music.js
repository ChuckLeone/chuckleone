import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function Music(props) {
  let createAlbumList = () => {
    let list = [];

    for (let i = 0; i < 3; i++) {
      let albums = [];
      for (let a = 0; a < 5; a++) {
        albums.push(
          <Grid item xs={2}>
            <Card style={props.theme.card}>
              <CardMedia />
              <CardContent>Title here</CardContent>
            </Card>
          </Grid>,
        );
      }
      return albums;
    }
  };

  return (
    <Grid container spacing={24} style={props.theme.container}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          Music
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Releases
        </Typography>
        <Grid container>{createAlbumList()}</Grid>
      </Grid>
    </Grid>
  );
}

export default withTheme()(Music);
