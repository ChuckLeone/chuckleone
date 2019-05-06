import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
    <Grid container style={props.theme.container}>
      <Grid item xs={12}>
        <h2>Music</h2>
      </Grid>
      <Grid item xs={12}>
        <p>This area will feature music</p>
      </Grid>

      {createAlbumList()}
    </Grid>
  );
}

export default withTheme()(Music);
