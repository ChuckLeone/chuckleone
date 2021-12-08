import React from "react";
import { Link } from "react-router-dom";
import { Button, Toolbar } from "@mui/material";
import InstagramLogo from '../assets/Instagram_logo_2016.svg';
import TwitterLogo from '../assets/twitter-logo.png';

const Navigation = () => {
    return (
        <Toolbar sx={{ marginLeft: '0', padding: '4px'}}>
            <Link to='/' style={{ textDecoration: 'none'}}><Button variant="text" style={{ color: '#fff'}}>Home</Button></Link>
            <Link to='/portfolio' style={{ textDecoration: 'none'}}><Button variant="text" style={{ color: '#fff'}}>Portfolio</Button></Link>
            <Link to='/music' style={{ textDecoration: 'none'}}><Button variant="text" style={{  color: '#fff'}}>Music</Button></Link>
            <Link to="http://www.instagram.com/chv.ck.leone/" target="new"><img src={InstagramLogo} width="24px" height="24px" style={{ padding: '0 8px' }} /></Link>
            <Link to="http://www.instagram.com/chv.ck.leone/" target="new"><img src={TwitterLogo} width="24px" height="24px" /></Link>
        </Toolbar>
    )
};

export default Navigation;