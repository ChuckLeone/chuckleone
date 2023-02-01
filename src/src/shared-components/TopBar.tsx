import { Box, Typography } from '@mui/material';
import Logo from '../assets/CHVCK.svg';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const MyLogo = Logo;
const TopBar = () => {
  return (
    <>
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
          <a href='/'>
            <div
              style={{
                backgroundImage: `url(${MyLogo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                height: '48px',
              }}
            >
              <Typography
                variant='h5'
                component='h1'
                sx={{ marginLeft: 0 }}
                className='sr-only'
              >
                CHUCK LEONE{' '}
              </Typography>
            </div>
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
            display: { lg: 'none', sm: 'block', xs: 'block' },
          }}
        >
          <MobileNavigation />
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
