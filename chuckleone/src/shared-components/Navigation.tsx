import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { grey } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navigation = () => {
  const iconColor = grey["A100"];

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar sx={{ marginLeft: "0", padding: "4px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="text" style={{ color: "#fff" }}>
            Home
          </Button>
        </Link>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <Button variant="text" style={{ color: "#fff" }}>
            Portfolio
          </Button>
        </Link>
        <Link to="/music" style={{ textDecoration: "none" }}>
          <Button variant="text" style={{ color: "#fff" }}>
            Music
          </Button>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }}>
          <IconButton size="large" aria-label="email me" color="inherit">
            <a href="mailto:chuckleone@gmail.com">
              <MailIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
          <IconButton size="large" aria-label="instagram page" color="inherit">
            <a href="http://www.instagram.com/chv.ck.leone/" target="new">
              <InstagramIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
          <IconButton size="large" aria-label="youtube link" color="inherit">
            <a
              href="https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA"
              target="new"
            >
              <YouTubeIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
          <IconButton size="large" aria-label="twitter page" color="inherit">
            <a href="http://www.twitter.com/chuckleone/" target="new">
              <TwitterIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
          <IconButton
            size="large"
            aria-label="LinkedIn profile"
            color="inherit"
          >
            <a href="https://www.linkedin.com/in/chuckleone/" target="new">
              <LinkedInIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
          <IconButton size="large" aria-label="sketchfab link" color="inherit">
            <a href="https://sketchfab.com/chuckleone" target="new">
              <ViewInArIcon sx={{ color: iconColor }} />
            </a>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
