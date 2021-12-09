import React from "react";
import { Box, Grid, IconButton, Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VaporCanyon from '../assets/vr-vapor-canyon.jpg';
import Navigation from "./Navigation";

const SiteBanner = () => {
    const liteColor = grey['A100'];

    return(
        <div style={{ backgroundImage: `url(${VaporCanyon})`, backgroundRepeat: 'no-repeat', minHeight: '100vh', width: '100%', backgroundColor: '#000', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3', color: 'white', minHeight: '100vh', width: '100%', padding: '8px'}}>
                <Box sx={{ minHeight: '60vh'}}>
                    <Grid container>   
                        <Grid item sm={12}>
                            <Navigation />
                        </Grid>
                    </Grid>  
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item sm={12} sx={{ marginLeft: '20px'}}>
                            <Typography variant="h1" component="h1" >CHV.CK LEONE</Typography>
                            <Typography variant="h6" component="h2">Developer | Designer | Artist</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{textAlign: 'center', marginRight: '40px', marginTop: '180px'}}>
                            <Typography variant="h5" sx={{color: 'rgba(255,255,255,0.6)'}}>Vapor Canyon</Typography>
                            <Typography variant="body1" sx={{color: 'rgba(255,255,255,0.6)'}}>Custom Unity 3D shader</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ textAlign: 'center'}}>
                            <Stack spacing={2}>
                                <Pagination count={3} color="secondary" renderItem={(item) => (
                                    <PaginationItem sx={{color: '#fff'}}
                                    components={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
                                    {...item} 
                                    />)} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
                
            </div>
        </div>
    );
};

export default SiteBanner;