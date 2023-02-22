// @ts-nocheck
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import BackArrow from '@mui/icons-material/KeyboardArrowLeft';
import ForwardArrow from '@mui/icons-material/KeyboardArrowRight';
import TopBar from '../shared-components/TopBar';
import Footer from '../shared-components/Footer';
import Data from '../data/portfolio.json';

const DetailsPage = () => {
  const portfolioItems = Data;
  const [portfolioItem, setPortfolioItem] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    if (portfolioItems.filter((e) => e.id === id).length > 0) {
      let selectedItem = portfolioItems.find((e) => e.id === id);
      setPortfolioItem(selectedItem);
    } else {
      console.log('false');
    }
  }, [id, portfolioItems]);

  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <TopBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              sx={{ color: 'white', marginLeft: 0, marginBottom: '16px' }}
            >
              <Button
                component='a'
                variant='link'
                href='/portfolio'
                startIcon={<BackArrow />}
              >
                Back to Portfolio
              </Button>
            </Typography>
            <Typography
              variant='h4'
              component='h1'
              sx={{ color: 'white', marginLeft: 0 }}
            >
              {portfolioItem.title}
            </Typography>
            <Typography
              variant='h6'
              component='h2'
              sx={{ color: 'white', marginLeft: '4px', marginTop: '16px' }}
            >
              {portfolioItem.description}
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: 'white', marginLeft: '4px', marginTop: '16px' }}
            >
              {portfolioItem.details}
            </Typography>
            {portfolioItem.link && (
              <Button
                component='a'
                variant='link'
                href={portfolioItem.link}
                target='new'
                endIcon={<ForwardArrow />}
                style={{ marginTop: '16px' }}
              >
                view live site
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item sm={12} md={12} sx={{ padding: '16px' }}>
          <img
            src={portfolioItem.img1}
            alt={portfolioItem.imgAlt}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={12} md={12} sx={{ padding: '16px' }}>
          <img
            src={portfolioItem.img2}
            alt={portfolioItem.imgAlt}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item sm={12} md={12} sx={{ padding: '16px' }}>
          <img
            src={portfolioItem.img3}
            alt={portfolioItem.imgAlt}
            style={{ width: '100%' }}
          />
        </Grid>
        <Box>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <Footer />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DetailsPage;
