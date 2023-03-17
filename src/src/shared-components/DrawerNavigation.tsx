import { useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PianoIcon from '@mui/icons-material/Piano';
import BandcampIcon from './BandcampIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconMandM from './IconMandM';

type Anchor = 'right';
const iconColor = grey['A100'];

const DrawerNavigation = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <IconButton
        size='small'
        aria-label='drawer-link-icon'
        color='inherit'
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon sx={{ color: iconColor }} />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      >
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer('right', false)}
          onKeyDown={toggleDrawer('right', false)}
        >
          <List className='drawer'>
            <ListItem>
              <ListItemButton component='a' href='/'>
                <ListItemIcon>
                  <HomeIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Home' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component='a' href='/portfolio'>
                <ListItemIcon>
                  <ColorLensIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Portfolio' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component='a' href='/music'>
                <ListItemIcon>
                  <PianoIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Music' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component='a' href='mailto:chuckleone@gmail.com'>
                <ListItemIcon>
                  <EmailIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Email' className='drawer-item' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className='drawer'>
            <ListItem>
              <ListItemButton
                component='a'
                href='http://www.instagram.com/chvck.leone/'
                target='new'
              >
                <ListItemIcon>
                  <InstagramIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Instagram' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component='a'
                href='http://www.twitter.com/chuckleone/'
                target='new'
              >
                <ListItemIcon>
                  <TwitterIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Twitter' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component='a'
                href='https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA'
                target='new'
              >
                <ListItemIcon>
                  <YouTubeIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='YouTube' className='drawer-item' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component='a'
                href='https://chuckleone.bandcamp.com/'
                target='new'
              >
                <ListItemIcon>
                  <BandcampIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='Bandcamp' className='drawer-item' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ padding: '0' }} />
          <List className='drawer'>
            <ListItem>
              <ListItemButton
                component='a'
                href='https://monstersandmachines.com'
                target='new'
              >
                <ListItemIcon>
                  <IconMandM />
                </ListItemIcon>
                <ListItemText
                  primary='Monsters + Machines'
                  className='drawer-item'
                  style={{ fontSize: '0.75rem' }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider sx={{ padding: '0' }} />
          <List className='drawer'>
            <ListItem>
              <ListItemButton
                component='a'
                href='https://github.com/chuckleone'
                target='new'
              >
                <ListItemIcon>
                  <GitHubIcon
                    fontSize='small'
                    sx={{ color: iconColor, paddingRight: '8px' }}
                  />
                </ListItemIcon>
                <ListItemText primary='GitHub' className='drawer-item' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
