import Navigation from "../shared-components/Navigation";
import { Box, Grid, Typography } from "@mui/material";
import MediaCard from "../shared-components/MediaCard";
import Obscurity from "../assets/album-cover-obscurity.jpg"
import TheReceptive from "../assets/album-cover-the-receptive.jpg";
import Position from "../assets/album-cover-position.jpg";
import BTEH from "../assets/album-cover-bteh..jpg";
import Dreamstatic from "../assets/album-cover-dreamstatic.jpg";
import React from "react";

const Music = () => {
    const albums = [
        {
            title: 'Obscurity',
            image: Obscurity,
            year: 2019,
            link: 'https://chuckleone.bandcamp.com/album/obscurity',
        },
        {
            title: 'The Receptive',
            image: TheReceptive,
            year: 2018,
            link: 'https://chuckleone.bandcamp.com/album/the-receptive',
        },
        {
            title: 'Position',
            image: Position,
            year: 2018,
            link: 'https://chuckleone.bandcamp.com/album/position',
        },
        {
            title: 'Beyond The Event Horizon',
            image: BTEH,
            year: 2018,
            link: 'https://chuckleone.bandcamp.com/album/beyond-the-event-horizon',
        },
        {
            title: 'Dreamstatic',
            image: Dreamstatic,
            year: 2018,
            link: 'https://chuckleone.bandcamp.com/album/dreamstatic',
        }
    ]
    return (
        <div style={{backgroundColor: '#171B27', minHeight: '100vh', minWidth: '100%'}}>
            <Box sx={{minHeight: '60px'}}>
                    <Grid container>   
                        <Grid item sm={12}>
                            <Navigation />
                        </Grid>
                    </Grid>  
                </Box>
                <Box>
                    <Grid container spacing={2} sx={{ marginLeft: '16px'}}>
                        <Grid item sm={12}>
                            <Typography variant="h4" component="h1" sx={{color: 'white', marginLeft: 0}}>CHUCK LEONE</Typography>
                            <Typography variant="h6" component="h2" sx={{color: 'white', marginLeft: '4px'}}>Developer | Designer | Artist</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px'}}>
                            <Typography variant="body1" sx={{color: 'white', marginBottom: '16px', maxWidth: '70%'}} gutterBottom>
                                Ambient, Noise, Industrial and IDM are few terms that have been used to describe the music I produce. 
                                Bordering on sound design, I work to push the limits of electronic music, twisting and manipulating sound into rythmic and odd creations. Below are a few samples of my sound experiments and music releases. 
                            </Typography>
                            <Typography variant="body1" sx={{color: 'white', marginBottom: '16px', maxWidth: '70%'}} gutterBottom>
                                Follow me on <a href="https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA" target="new" style={{ textDecoration: 'none', color: 'cornflowerblue'}}>YouTube</a>, <a href="http://www.instagram.com/chv.ck.leone/" target="new" style={{ textDecoration: 'none', color: 'cornflowerblue'}}>Instagram</a> and  <a href="https://chuckleone.bandcamp.com/" target="new" style={{ textDecoration: 'none', color: 'cornflowerblue'}}>Bandcamp</a> to experience more of my sound explorations.
                            </Typography>
                            
                        </Grid>
                        <Grid item sm={12} sx={{maxWidth: '70%'}}>
                        <Typography variant="h6" sx={{color: 'white'}} gutterBottom>Generative Modular Synth</Typography>
                            <iframe
                                // width="560" 
                                // height="315" 
                                width="70%"
                                height="315"
                                src="https://www.youtube.com/embed/FG2HMPdyRzw?controls=0" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px', paddingRight: '30px'}}>
                            <Typography variant="h6" component="h6" sx={{color: 'white'}} gutterBottom>Available Releases</Typography>
                            <Grid container spacing={3}>
                            <MediaCard albums={albums} />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Box>
        </div>
    )
};

export default Music;