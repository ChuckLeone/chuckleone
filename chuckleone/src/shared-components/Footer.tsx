import { Grid, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    const getDate = () => {
        return new Date().getFullYear();
    }
    return (
        <Grid container spacing={2} sx={{marginTop: '20px', marginBottom: '20px'}}>
            <Grid item sm={12}>
            <Divider />
            </Grid>
            <Grid item sm={6}>
            <Typography variant="caption" sx={{ color: '#a7a7a7'}}>Copyright © {getDate()} by Chuck Leone </Typography>
            </Grid>
            <Grid item sm={6} sx={{textAlign: 'right'}}>
                <Typography variant="caption" sx={{ color: '#a7a7a7'}}>
                Developer | Designer | Artist
                </Typography>
            </Grid>
            
            
        </Grid>
        
    );
};

export default Footer;