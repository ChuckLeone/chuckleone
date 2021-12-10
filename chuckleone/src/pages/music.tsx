import Navigation from "../shared-components/Navigation";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Music = () => {
    return (
        <div style={{backgroundColor: '#222', minHeight: '100vh', minWidth: '100%'}}>
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
                            <Typography variant="h6" sx={{color: 'white'}}>Generative Modular Synth</Typography>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FG2HMPdyRzw" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                                </iframe>
                        </Grid>
                    </Grid>
                </Box>
        </div>
    )
};

export default Music;