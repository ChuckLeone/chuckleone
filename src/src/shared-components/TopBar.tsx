import { Box, Typography } from '@mui/material';
import Logo from '../assets/CHVCK.svg';
import DrawerNavigation from './DrawerNavigation';
import Navigation from './Navigation';

const MyLogo = Logo;
const TopBar = () => {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '48px',
          backgroundColor: 'transparent',
          padding: '16px',
          color: '#fff',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'left', flex: 'auto' }}>
          <a href='/' aria-label='return to home page'>
            <Typography
              variant='h5'
              component='h1'
              sx={{ marginLeft: 0 }}
              className='sr-only'
            >
              CHUCK LEONE{' '}
            </Typography>
            <div
              style={{
                backgroundImage: `url(${MyLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '48px',
              }}
            ></div>
          </a>
        </Box>
        <Box
          sx={{
            textAlign: 'right',
            flex: 'inherit',
            display: { xs: 'none', sm: 'none', lg: 'block' },
          }}
        >
          <Navigation />
        </Box>
        <Box
          sx={{
            textAlign: 'right',
            flex: 'auto',
            maxWidth: '48px',
          }}
        >
          <DrawerNavigation />
        </Box>
      </Box>
    </header>
  );
};

export default TopBar;
