import { useEffect, useState, ReactNode } from 'react';
import TopBar from '../shared-components/TopBar';
import {
  Box,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import MediaCard from '../shared-components/MediaCard';
import Obscurity from '../assets/album-cover-obscurity.jpg';
import TheReceptive from '../assets/album-cover-the-receptive.jpg';
import Position from '../assets/album-cover-position.jpg';
import BTEH from '../assets/album-cover-bteh..jpg';
import Dreamstatic from '../assets/album-cover-dreamstatic.jpg';
import PsyclonNine from '../assets/Poster-Psyclon-Nine.jpg';
import BioPicture from '../assets/press-kit/profile.jpg';
import Footer from '../shared-components/Footer';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function BioPanel() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <img
            src={BioPicture}
            alt='CHVCK'
            style={{ maxWidth: '500px', width: '100%' }}
          />
        </Grid>
        <Grid item sm={9}>
          <Typography
            variant='body1'
            style={{ color: '#fff', marginBottom: '16px' }}
          >
            Starting at an early age, I became obsessed with music, audio
            recording and performing. I starting playing guitar at the age of 10
            and by the time I was 16 years old, I was experimenting with tape
            looping, overdubbing and building weird soundtracks consisting of
            layers of live music, found sounds from sources such as
            AM/FM/shortwave radio, TV and movie sound bytes, outdoor and indoor
            room ambience and more.
          </Typography>
          <Typography
            variant='body1'
            style={{ color: '#fff', marginBottom: '16px' }}
          >
            Fast forward to today and I've played in numerous bands - most
            notably as rhythm guitarist for{' '}
            <a href='https://linktr.ee/Sixpin' target='new'>
              Sixpin
            </a>{' '}
            and one half of the Industrial/IDM duo{' '}
            <a
              href='https://www.facebook.com/OrganicSynthesisBand/'
              target='new'
            >
              Organic Synthesis
            </a>
            . Since 2017 I've recorded and produced 2 full albums, 3 EPs and
            have had my work featured in independent video games. The experience
            I have gathered over the decades playing with other musicians,
            designing live music rigs and experimenting with visualizations
            reflects in my work as a solo artist, producer, sound designer and
            performer.
          </Typography>
          <Typography variant='body1' style={{ color: '#fff' }}>
            I focus equally on all aspects of the entire creative process -
            writing, recording, mastering and releasing all my tracks; designing
            and developing all branding, album art, merchandise and online
            presence. I take great care in crafting not only my music but all of
            these elements in order to deliver a high quality, unique and
            memorable experience for the listener.
          </Typography>
        </Grid>
        <Grid item sm={12} sx={{ marginTop: '10px' }}>
          <Typography variant='body1' style={{ color: '#fff' }}>
            <a href='mailto:chuckleone@gmail.com'>Email me</a> for booking or
            more information
          </Typography>
        </Grid>
        <Grid item sm={12} sx={{ marginTop: '10px' }}>
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
              href='http://www.instagram.com/chvck.leone/'
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
      </Grid>
    </>
  );
}

function LivePanel() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography component='h3' sx={{ color: 'white' }} variant='h5'>
          Upcoming Live Performances
        </Typography>
        <Typography variant='h6' sx={{ color: 'white' }} gutterBottom>
          Psyclon Nine w/Clockwork Echo, Our Frankenstein and Corvin's Breed
        </Typography>
        <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
          3/1/2023 - Mohawk Place, Buffalo NY
        </Typography>
        <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
          Click{' '}
          <a href='https://www.buffalosmohawkplace.com/' target='new'>
            here
          </a>{' '}
          for more information and tickets
        </Typography>

        <div>
          <img src={PsyclonNine} width='100%' alt='Psyclon Nine Tour Poster' />
        </div>
      </Grid>
      <Grid item sm={12}>
        <Divider variant='fullWidth' sx={{ color: 'gray' }} />
      </Grid>
      <Grid item sm={12}>
        <Typography component='h3' sx={{ color: 'white' }} variant='h5'>
          Past Performances
        </Typography>
        <Typography variant='h6' sx={{ color: 'white' }} gutterBottom>
          April 2, 2022 at Revolution Gallery Lounge, Buffalo NY
        </Typography>
        <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
          One hour live industrial/IDM set.
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
            src='https://www.youtube.com/embed/zvnXv5s0eIo?controls=0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </Grid>
    </Grid>
  );
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`press-kit-tabpanel-${index}`}
      aria-labelledby={`press-kit-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PressKitTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='press kit tabs'>
          <Tab label='Bio' {...a11yProps(0)} />
          <Tab label='Discography' {...a11yProps(1)} />
          <Tab label='Live' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BioPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <MediaCard albums={albums} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LivePanel />
      </TabPanel>
    </Box>
  );
}

const Music = () => {
  useEffect(() => {
    document.title = 'Music';
  }, []);

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
              Traversing the realms of Industrial, IDM, Darkwave and Ambient.
            </Typography>

            <Typography
              variant='body1'
              sx={{ color: 'white', marginBottom: '16px' }}
              gutterBottom
            >
              Combining elements of sound design, pushing the limits of
              electronic music, twisting and manipulating sounds into rythmic
              and cinematic soundscapes.
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <PressKitTabs />
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
