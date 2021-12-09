import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { grey } from '@mui/material/colors'
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navigation = () => {
    const iconColor = grey['A100'];
    
    return (
        <AppBar color="transparent" sx={{boxShadow: 'none'}}>
        <Toolbar sx={{ marginLeft: '0', padding: '4px'}}>
            <Link to='/' style={{ textDecoration: 'none'}}><Button variant="text" style={{ color: '#fff'}}>Home</Button></Link>
            <Link to='/portfolio' style={{ textDecoration: 'none'}}><Button variant="text" style={{ color: '#fff'}}>Portfolio</Button></Link>
            <Link to='/music' style={{ textDecoration: 'none'}}><Button variant="text" style={{  color: '#fff'}}>Music</Button></Link>
            <Link to='/monstersandmachines' style={{ textDecoration: 'none'}}><Button variant="text" style={{  color: '#fff'}}>Monsters and Machines</Button></Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="email link" color="inherit">
                    <MailIcon />
                </IconButton>
                <IconButton size="large" aria-label="instagram link" color="inherit">
                <a href="http://www.instagram.com/chv.ck.leone/" target="new">
                    <InstagramIcon sx={{ color: iconColor }}/>
                </a>
                </IconButton>
                <IconButton size="large" aria-label="twitter link" color="inherit">
                    <a href="http://www.twitter.com/chuckleone/" target="new">
                        <TwitterIcon sx={{ color: iconColor }} />
                    </a>
                </IconButton>
            </Box>
        </Toolbar>
        </AppBar>
    )
};

export default Navigation;