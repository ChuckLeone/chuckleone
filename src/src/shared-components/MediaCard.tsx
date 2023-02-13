// @ts-nocheck
import { Grid, Card, CardMedia } from '@mui/material';

const MediaCard = (props) => {
  return (
    <>
      {props.albums.map((album) => (
        <Grid item key={album.title}>
          <a href={album.link} target='new' sx={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: '300px', marginBottom: '8px' }}>
              <CardMedia
                component='img'
                height='300'
                image={`${album.image}?w=248&fit=crop&auto=format`}
                alt={album.description}
                tags={album.tags}
              />
            </Card>
          </a>
        </Grid>
      ))}
    </>
  );
};

export default MediaCard;
