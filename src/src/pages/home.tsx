import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VaporCanyon from '../assets/vapor-canyon.jpg';
import BeneathTheSand from '../assets/beneath-the-sand-jacket.jpg';
import MerchPreview from '../assets/merch-preview.jpg';
import Samurai from '../assets/samurai.jpg';
import CodeFall from '../assets/CodeFall.jpg';
import Inception from '../assets/inception.jpg';
import Folding from '../assets/infinite-folding.gif';
import TopBar from '../shared-components/TopBar';
import Footer from '../shared-components/Footer';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const VideoContainer = () => {
  const size = useWindowResize();
  return (
    <>
      <div className='video-container'>
        <video autoPlay controls id='myVideo' width={size.width + 'px'}>
          <source
            src='http://chuckleone.com/video/folding.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </>
  );
};

function useWindowResize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      return () => window.removeEventListener('resize', handleResize);
    }
    window.addEventListener('resize', handleResize);

    handleResize();
  }, []);
  return windowSize;
}

const Home = () => {
  const backgrounds = [
    {
      id: 0,
      file: CodeFall,
      title: 'New merch',
      description:
        'T-shirts, patches, stickers and exclusive Monsters + Machines guitar pedal toppers.',
      type: 'featured',
      featuredText:
        'Newly designed T-Shirts, stickers and patches coming to bandcamp',
      featuredLink: 'http://chuckleone.bandcamp.com',
      featuredLinkText: 'Click here to visit my bandcamp page',
      featuredImage: MerchPreview,
    },
    {
      id: 1,
      file: Folding,
      title: 'Infinite Folding',
      description: 'Music Video | Staella iOS',
      type: 'video',
      featuredText: 'New Music Video',
    },
    {
      id: 2,
      file: Inception,
      title: 'Inception',
      description: 'Mandlebulb Fractal | Mandlebulb 3D + Adobe Photoshop',
      type: 'image',
      featturedText: 'Explorations in Mandlebuld 3D fractal generation',
    },
    {
      id: 4,
      file: VaporCanyon,
      title: 'Vapor Dream',
      description: 'VR Experience | Adobe Photoshop + Unity 3D',
      type: 'image',
      featuredText: '',
    },
    {
      id: 5,
      file: Samurai,
      title: 'Samurai',
      description: '3D Model | Medium by Adobe',
      type: 'image',
      featuredText: '',
    },
    {
      id: 3,
      file: BeneathTheSand,
      title: 'Beneath the Sand',
      description: 'Book Cover/Dust Jack | Adobe Photoshop',
      type: 'image',
      featuredText: '',
    },
  ];
  const [page, setPage] = useState(1);
  const [background, setBackground] = useState(backgrounds[0]);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleClick = (item: any) => {
    setOpen(true);
  };

  useEffect(() => {
    document.title = 'Chuck Leone | Home';
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const arrayIndex = value - 1;
    setBackground(backgrounds[arrayIndex]);
  };

  return (
    <>
      <div
        id='page-background'
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
          <main>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant='h2' className='sr-only'>
                    Home
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    minHeight: { xs: '55vh', sm: '65vh', md: '75vh' },
                    position: 'relative',
                  }}
                >
                  {background.type === 'video' && (
                    <>
                      <span
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <Button
                          variant='outlined'
                          sx={{ height: '64px', width: '200px' }}
                          onClick={handleClick}
                          endIcon={<PlayCircleOutlineIcon />}
                        >
                          Watch Video
                        </Button>
                      </span>
                    </>
                  )}
                  {background.type === 'featured' && (
                    <>
                      <Typography variant='h5' component='h3'>
                        {background.featuredText}
                      </Typography>
                      <a href={background.featuredLink} target='new'>
                        {background.featuredLinkText}
                      </a>
                      <div style={{ textAlign: 'center', padding: '16px' }}>
                        <img
                          src={background.featuredImage}
                          width='100%'
                          alt='Psyclon Nine Tour Poster'
                          style={{ maxHeight: '60vh', maxWidth: '60vw' }}
                        />
                      </div>
                    </>
                  )}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  sx={{ textAlign: 'left' }}
                >
                  <Typography variant='h3' sx={{ color: 'rgb(255,255,255)' }}>
                    {background.title}
                  </Typography>
                  <Typography
                    variant='caption'
                    sx={{ color: 'rgb(255,255,255)' }}
                  >
                    {background.description}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  sx={{ textAlign: 'right' }}
                >
                  <Stack
                    spacing={2}
                    direction='column'
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
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
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Footer />
                </Grid>
              </Grid>
            </Container>
          </main>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='gallery-modal'
        aria-describedby='gallery-modal-desicription'
        maxWidth='xl'
        PaperProps={{ sx: { background: 'none ' } }}
      >
        <Box
          sx={{
            margin: '8px',
            textAlign: 'center',
            top: '50%',
            left: '50%',
          }}
        >
          <Typography
            id='gallery-modal-title'
            variant='h5'
            component='h3'
            sx={{ color: '#fff', margin: '16px' }}
          >
            <span className='sr-only'>Video Player</span>
          </Typography>
          <div style={{ textAlign: 'right' }}>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </div>
          <VideoContainer />
        </Box>
      </Dialog>
    </>
  );
};

export default Home;
