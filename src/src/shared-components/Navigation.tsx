import React from 'react';
import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PianoIcon from '@mui/icons-material/Piano';

const Navigation = () => {
  const iconColor = grey['A100'];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size='small'
        aria-label='social-link-icon'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        color='inherit'
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: iconColor }} />
      </IconButton>
      <Menu
        id='social-link-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'social-link-icon',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a
            href='/'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <HomeIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              Home
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='/portfolio'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <ColorLensIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              Portfolio
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='/music'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <PianoIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              Music
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='http://www.instagram.com/chvck.leone/'
            target='new'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <InstagramIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              Instagram
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA'
            target='new'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <YouTubeIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              YouTube
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='http://www.twitter.com/chuckleone/'
            target='new'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <TwitterIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              Twitter
            </ListItemIcon>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            href='https://github.com/chuckleone'
            target='new'
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.75em',
            }}
          >
            <ListItemIcon>
              <GitHubIcon
                fontSize='small'
                sx={{ color: iconColor, paddingRight: '8px' }}
              />
              GitHub
            </ListItemIcon>
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Navigation;
