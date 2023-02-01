import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';

const Footer = () => {
  const getDate = () => {
    return new Date().getFullYear();
  };
  return (
    <Grid
      container
      spacing={1}
      sx={{ marginTop: '20px', marginBottom: '20px' }}
    >
      <Grid item sm={12}>
        <Divider />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' },
          paddingTop: { xs: 0, sm: 0 },
        }}
      >
        <a
          href='mailto:chuckleone@gmail.com'
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingRight: '16px',
          }}
        >
          <Typography variant='caption'>Email</Typography>
        </a>
        <a
          href='https://www.linkedin.com/in/chuckleone/'
          target='new'
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingRight: '16px',
          }}
        >
          <Typography variant='caption'>LinkedIn</Typography>
        </a>
        <a
          href='https://github.com/ChuckLeone'
          target='new'
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingRight: '16px',
          }}
        >
          <Typography variant='caption'>GitHub</Typography>
        </a>
        <a
          href='https://sketchfab.com/chuckleone'
          target='new'
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingRight: '16px',
          }}
        >
          <Typography variant='caption'>Sketchfab</Typography>
        </a>
        <a
          href='https://www.artstation.com/chuckleone'
          target='new'
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingRight: '16px',
          }}
        >
          <Typography variant='caption'>Artstation</Typography>
        </a>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{
          textAlign: { lg: 'right', md: 'right', sm: 'right', xs: 'center' },
          paddingTop: { xs: 0, sm: 0 },
        }}
      >
        <Typography
          variant='caption'
          sx={{ color: '#a7a7a7', textAlign: { sm: 'center', xs: 'center' } }}
        >
          Copyright © {getDate()} Chuck Leone{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
