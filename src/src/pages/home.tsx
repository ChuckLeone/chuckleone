import React, { useState } from 'react';
import {
  Container,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VaporCanyon from '../assets/vapor-canyon.jpg';
import BeneathTheSand from '../assets/beneath-the-sand-jacket.jpg';
import Samurai from '../assets/3d-samurai.jpg';
import CodeFallSulfur from '../assets/CodeFall-Sulfur.jpg';
import SwampBlue3 from '../assets/world-0/swamp-blue-3.jpg';
import Inception from '../assets/inception.jpg';
import TopBar from '../shared-components/TopBar';
import Footer from '../shared-components/Footer';

const Home = () => {
  const backgrounds = [
    {
      id: 0,
      file: Inception,
      title: 'Inception',
      description: 'Mandlebulb Fractal | Mandlebulb 3D + Adobe Photoshop',
    },
    {
      id: 1,
      file: VaporCanyon,
      title: 'Vapor Canyon',
      description: 'VR Experience | Adobe Photoshop + Unity 3D',
    },
    {
      id: 2,
      file: Samurai,
      title: 'Samurai',
      description: '3D Model | Medium by Adobe',
    },
    {
      id: 3,
      file: BeneathTheSand,
      title: 'Beneath the Sand',
      description: 'Book Cover/Dust Jack | Adobe Photoshop',
    },
    {
      id: 4,
      file: CodeFallSulfur,
      title: 'Code Fall Sulfur',
      description: 'Poster/T-shirt design | Adobe Photoshop',
    },
    {
      id: 5,
      file: SwampBlue3,
      title: 'Blue Swamp',
      description: 'VR Experience | Adobe Photoshop + Unity 3D',
    },
  ];
  const [page, setPage] = useState(1);
  const [background, setBackground] = useState(backgrounds[0]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const arrayIndex = value - 1;
    setBackground(backgrounds[arrayIndex]);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background.file})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5',
          color: 'white',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <TopBar />
        <Container>
          <Grid container sx={{ minHeight: '65vh' }}>
            <Grid item sm={12} lg={12}>
              <Typography
                variant='h4'
                component='h2'
                sx={{ marginTop: '16px' }}
              >
                Welcome
              </Typography>
              <Typography variant='body1'>Take a look around</Typography>
            </Grid>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Stack spacing={2} direction='column' sx={{ display: 'flex' }}>
              <Pagination
                count={backgrounds.length}
                color='secondary'
                page={page}
                onChange={handleChange}
                renderItem={(item) => (
                  <PaginationItem
                    sx={{ color: '#fff' }}
                    components={{
                      previous: ArrowBackIosIcon,
                      next: ArrowForwardIosIcon,
                    }}
                    {...item}
                  />
                )}
              />
            </Stack>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              sx={{ textAlign: 'left', marginTop: '10px' }}
            >
              <Typography variant='h5' sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {background.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {background.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Footer />
          </Grid>
        </Container>
        <div style={{ margin: '16px' }}></div>
      </div>
    </div>
  );
};

export default Home;
