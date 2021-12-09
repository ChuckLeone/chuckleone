import Navigation from "../shared-components/Navigation";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Music = () => {
    return (
        <div style={{backgroundColor: '#223237', minHeight: '100vh', minWidth: '100%'}}>
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
                            <Typography variant="h4" component="h1" sx={{color: 'white', marginLeft: 0}}>CHV.CK LEONE</Typography>
                            <Typography variant="h6" component="h2" sx={{color: 'white', marginLeft: '4px'}}>Developer | Designer | Artist</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{ marginTop: '10px'}}>
                            <Typography variant="body1" sx={{color: 'white'}}>Examples of Music </Typography>
                            <Typography variant="body1" sx={{color: 'white'}}>Project description</Typography>
                        </Grid>
                    </Grid>
                </Box>
        </div>
    )
};

export default Music;