import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Navigation = () => {
  const iconColor = grey["A100"];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="secondary" sx={{ boxShadow: "none" }}>
      <Toolbar>
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
          <IconButton
            size="small"
            aria-label="social-link-icon"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            color="inherit"
            onClick={handleClick}
          >
            <MenuIcon sx={{ color: iconColor }} />
          </IconButton>
          <Menu
            id="social-link-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "social-link-icon",
            }}
          >
            <MenuItem onClick={handleClose}>
              <a
                href="http://www.instagram.com/chv.ck.leone/"
                target="new"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.75em",
                }}
              >
                <ListItemIcon>
                  <InstagramIcon
                    fontSize="small"
                    sx={{ color: iconColor, paddingRight: "8px" }}
                  />
                  Instagram
                </ListItemIcon>
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA"
                target="new"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.75em",
                }}
              >
                <ListItemIcon>
                  <YouTubeIcon
                    fontSize="small"
                    sx={{ color: iconColor, paddingRight: "8px" }}
                  />
                  YouTube
                </ListItemIcon>
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="http://www.twitter.com/chuckleone/"
                target="new"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.75em",
                }}
              >
                <ListItemIcon>
                  <TwitterIcon
                    fontSize="small"
                    sx={{ color: iconColor, paddingRight: "8px" }}
                  />
                  Twitter
                </ListItemIcon>
              </a>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
