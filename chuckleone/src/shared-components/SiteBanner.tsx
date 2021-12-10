// @ts-nocheck 
import React, { useState } from "react";
import { Grid, Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VaporCanyon from '../assets/vapor-canyon.jpg';
import LightwingHunter from '../assets/lightwing-hunter.jpg';
import MechaScene from '../assets/mecha-scene.jpg';
import TacticalAssassin from '../assets/tactical-assassin-droid.png';
import UAV from '../assets/UAV-HUV01-UrbanCamoEdition.png';
import Navigation from "./Navigation";

const SiteBanner = () => {
    const backgrounds = [
        {
            id: 1,
            file: VaporCanyon,
            title: 'Vapor Canyon',
            description: 'VR Experience | Unity 3D',
        },
        {
            id: 2,
            file: MechaScene,
            title: 'Samurai',
            description: 'Sculpture | Medium by Adobe',
        },
        {
            id: 3,
            file: LightwingHunter,
            title: 'Lightwing Hunter',
            description: 'Sculpture | Medium by Adobe',
        },
        {
            id: 4,
            file: TacticalAssassin,
            title: 'Tactical Assassin Droid',
            description: 'Sculpture | SculptVR/Sketchfab Render',
        },
        {
            id: 5,
            file: UAV,
            title: 'UAV/HUV 01 - Urban Camo Edition',
            description: 'Sculpture | SculptVR/Sketchfab Render',
        },
    ]; 
    const [page, setPage] = useState(1);
    const [background, setBackground] = useState(backgrounds[0]);

    const handleChange = (event, value) => {
        setPage(value);
        const arrayIndex = value - 1;
        console.log(arrayIndex);
        setBackground(backgrounds[arrayIndex]);
      };

    return(
        <div style={{ backgroundImage: `url(${background.file})`, backgroundRepeat: 'no-repeat', minHeight: '100vh', width: '100%', backgroundColor: '#000', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.5', color: 'white', minHeight: '100vh', width: '100%', padding: '8px'}}>
                
                    <Grid container sx={{ minHeight: '55vh'}}>   
                        <Grid item sm={12}>
                            <Navigation />
                        </Grid>
                    </Grid>  
                
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={12} lg={12} sx={{ marginLeft: '20px'}}>
                            <Typography variant="h1" component="h1" sx={{marginLeft: 0}}>CHUCK LEONE</Typography>
                            <Typography variant="h6" component="h2" sx={{marginLeft: '4px'}}>Developer | Designer | Artist</Typography>
                        </Grid>
                        <Grid item sm={12} sx={{textAlign: 'center', marginTop: '10px'}}>
                            <Typography variant="h5" sx={{color: 'rgba(255,255,255,0.6)'}}>{background.title}</Typography>
                            <Typography variant="body2" sx={{color: 'rgba(255,255,255,0.6)'}}>{background.description}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12} sx={{ marginLeft: '12px'}}>
                            <Stack spacing={2}>
                                <Pagination count={backgrounds.length} color="secondary" page={page} onChange={handleChange} renderItem={(item) => (
                                    <PaginationItem sx={{color: '#fff'}}
                                        components={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
                                    {...item} 
                                    />)} />
                            </Stack>
                        </Grid>
                    </Grid>
            </div>
        </div>
    );
};

export default SiteBanner;