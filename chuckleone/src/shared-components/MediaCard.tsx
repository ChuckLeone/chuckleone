// @ts-nocheck 
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MediaCard = (props) => {
    return (
        <>
         {props.albums.map((album) => ( 
             <Grid item key={album.title} >          
             <a href={album.link} target="new" sx={{ textDecoration: 'none'}}>
            <Card sx={{maxWidth: '300px', marginBottom: '8px'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={`${album.image}?w=248&fit=crop&auto=format`}
                    alt={album.title}
                />
            </Card>
            </a>
            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                {album.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
                {album.year}
            </Typography>
        </Grid>
         ))}
    </>
    )
};

export default MediaCard;