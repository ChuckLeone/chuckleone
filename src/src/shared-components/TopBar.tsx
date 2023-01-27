import { Grid, Typography } from '@mui/material';
import Logo from '../assets/CHVCK.svg';
import Navigation from './Navigation';

const MyLogo = Logo;
const TopBar = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: '80px',
          backgroundColor: 'transparent',
          padding: '16px',
          color: '#fff',
        }}
      >
        <Grid item sm={6} md={6} lg={6}>
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
          <Typography variant='caption' sx={{ marginLeft: '8px' }}>
            Designer | Developer | Musician
          </Typography>
        </Grid>
        <Grid item sm={6} md={6} lg={6} sx={{ textAlign: 'right' }}>
          <Navigation />
        </Grid>
      </Grid>
    </>
  );
};

export default TopBar;
