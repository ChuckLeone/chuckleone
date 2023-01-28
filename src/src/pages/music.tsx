import TopBar from '../shared-components/TopBar';
import { Box, Container, Grid, Typography } from '@mui/material';
import MediaCard from '../shared-components/MediaCard';
import Obscurity from '../assets/album-cover-obscurity.jpg';
import TheReceptive from '../assets/album-cover-the-receptive.jpg';
import Position from '../assets/album-cover-position.jpg';
import BTEH from '../assets/album-cover-bteh..jpg';
import Dreamstatic from '../assets/album-cover-dreamstatic.jpg';
import PsyclonNine from '../assets/Poster-Psyclon-Nine.jpg';
import Footer from '../shared-components/Footer';

const Music = () => {
  const albums = [
    {
      title: 'Obscurity',
      image: Obscurity,
      year: 2019,
      link: 'https://chuckleone.bandcamp.com/album/obscurity',
    },
    {
      title: 'The Receptive',
      image: TheReceptive,
      year: 2018,
      link: 'https://chuckleone.bandcamp.com/album/the-receptive',
    },
    {
      title: 'Position',
      image: Position,
      year: 2018,
      link: 'https://chuckleone.bandcamp.com/album/position',
    },
    {
      title: 'Beyond The Event Horizon',
      image: BTEH,
      year: 2018,
      link: 'https://chuckleone.bandcamp.com/album/beyond-the-event-horizon',
    },
    {
      title: 'Dreamstatic',
      image: Dreamstatic,
      year: 2018,
      link: 'https://chuckleone.bandcamp.com/album/dreamstatic',
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        minHeight: '100vh',
        minWidth: '100%',
      }}
    >
      <TopBar />
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} sx={{ marginTop: '10px' }}>
            <Typography
              variant='h5'
              component='h2'
              sx={{ color: 'white' }}
              gutterBottom
            >
              Traversing the realms of ambient, noise, industrial and IDM.
            </Typography>

            <Typography
              variant='body1'
              sx={{ color: 'white', marginBottom: '16px' }}
              gutterBottom
            >
              Bordering on sound design, pushing the limits of electronic music,
              twisting and manipulating sounds into rythmic and odd soundscapes.
            </Typography>
          </Grid>
          <Grid item sm={12} sx={{ marginTop: '10px' }}>
            <Typography
              variant='h6'
              component='h3'
              sx={{ color: 'white' }}
              gutterBottom
            >
              Live
            </Typography>

            <div>
              <img
                src={PsyclonNine}
                width='100%'
                alt='Psyclon Nine Tour Poster'
              />
            </div>
            <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
              Click{' '}
              <a href='https://www.buffalosmohawkplace.com/' target='new'>
                here
              </a>{' '}
              for more information and tickets
            </Typography>
            <Typography
              variant='body1'
              sx={{ color: 'white', marginBottom: '16px' }}
              gutterBottom
            >
              Follow me on{' '}
              <a
                href='https://www.youtube.com/channel/UCT4tYnr6SjSunE3EWC5y5QA'
                target='new'
                style={{ textDecoration: 'none', color: 'cornflowerblue' }}
              >
                YouTube
              </a>
              ,{' '}
              <a
                href='http://www.instagram.com/chv.ck.leone/'
                target='new'
                style={{ textDecoration: 'none', color: 'cornflowerblue' }}
              >
                Instagram
              </a>{' '}
              and{' '}
              <a
                href='https://chuckleone.bandcamp.com/'
                target='new'
                style={{ textDecoration: 'none', color: 'cornflowerblue' }}
              >
                Bandcamp
              </a>{' '}
              to discover more music and upcoming live shows.
            </Typography>
          </Grid>

          <Grid item sm={12} sx={{ marginTop: '10px', paddingRight: '30px' }}>
            <Typography
              variant='h6'
              component='h3'
              sx={{ color: 'white' }}
              gutterBottom
            >
              Available Releases
            </Typography>
            <Grid container spacing={3}>
              <MediaCard albums={albums} />
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Typography component='h3' sx={{ color: 'white' }} variant='h5'>
              Experimental
            </Typography>
            <Typography variant='h6' sx={{ color: 'white' }} gutterBottom>
              "Voices From the Ether"
            </Typography>
            <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
              The second piece in a series of generative modular synthesizer
              soundscapes. This series features custom patches that are
              self-playing and evolve over time.
            </Typography>
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                height: '0',
                marginTop: '16px',
              }}
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                }}
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/FG2HMPdyRzw?controls=0'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Music;
