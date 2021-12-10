// @ts-nocheck 
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MediaCard = (props) => {

    return (
        <>
        <a href={props.link} target="new">
        <Grid item md={4}>
            <Card key={props.title} sx={{maxWidth: '300px'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={`${props.img}?w=248&fit=crop&auto=format`}
                    alt={props.title}
                />
            </Card>
            <Typography gutterBottom variant="h6" component="div" sx={{color: 'white'}}>
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: 'white'}}>
                {props.year}
            </Typography>
        </Grid>
        </a>
    </>
    )
};

export default MediaCard;