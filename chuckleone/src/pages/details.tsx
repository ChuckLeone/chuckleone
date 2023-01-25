// @ts-nocheck
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import Navigation from '../shared-components/Navigation';
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
        backgroundColor: '#171B27',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Container>
        <Box sx={{ minHeight: '60px', marginTop: '16px' }}>
          <Grid container>
            <Grid item sm={12} md={12}>
              <Navigation />
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
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
              sx={{ color: 'white', marginLeft: '4px' }}
            >
              {portfolioItem.description}
            </Typography>
          </Grid>
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
