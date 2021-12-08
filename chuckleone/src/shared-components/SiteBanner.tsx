import React from "react";
import { Box, Grid, Typography } from '@mui/material';
import VaporCanyon from '../assets/vr-vapor-canyon.jpg';
import Navigation from "./Navigation";

const SiteBanner = () => {
    return(
        <div style={{ backgroundImage: `url(${VaporCanyon})`, backgroundRepeat: 'no-repeat', minHeight: '100vh', width: '100%', backgroundColor: '#000', backgroundPosition: 'center'}}>
            <Box>
                <Box style={{ backgroundColor: 'rgba(0,0,0,0.6', color: 'white', minHeight: '20vh', width: '100%', padding: '8px'}}>
            <Grid container>
                <Grid item sm={12} sx={{ marginLeft: '32px', marginTop: '20px'}}>
                    <Typography variant="h4" component="h1" >CHV.CK LEONE</Typography></Grid>
                <Grid item sm={12}>
                    <Navigation />
                </Grid>
            </Grid>
            </Box>
            <Box>
            <Grid container sx={{ marginLeft: '40px', marginTop: '20px'}}>
                <Grid item sm={12}>
                    Content here
                </Grid>
            </Grid>
            </Box>
            </Box>
        </div>
    );
};

export default SiteBanner;