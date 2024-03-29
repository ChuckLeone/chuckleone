import { useEffect, useState, ReactNode } from 'react';
import TopBar from '../shared-components/TopBar';
import {
  Box,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MediaCard from '../shared-components/MediaCard';
import Obscurity from '../assets/album-cover-obscurity.jpg';
import TheReceptive from '../assets/album-cover-the-receptive.jpg';
import Position from '../assets/album-cover-position.jpg';
import BTEH from '../assets/album-cover-bteh..jpg';
import Dreamstatic from '../assets/album-cover-dreamstatic.jpg';
import BioPicture from '../assets/press-kit/profile.jpg';
import Footer from '../shared-components/Footer';
import Folding from '../assets/infinite-folding.gif';
import VideoPlayer from '../shared-components/VideoPlayer';

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
      <Grid item sm={12} xs={12}>
        <Typography component='h3' sx={{ color: 'white' }} variant='h4'>
          Upcoming Live Performances
        </Typography>
        <Typography component='h4' sx={{ color: 'white' }} variant='h5'>
          Stay tuned for upcoming events.
        </Typography>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Divider variant='fullWidth' sx={{ color: 'gray' }} />
      </Grid>
      <Grid item sm={12} xs={12}>
        <Typography component='h3' sx={{ color: 'white' }} variant='h4'>
          Past Performances
        </Typography>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Typography
          component='h4'
          variant='h5'
          sx={{ color: 'white' }}
          gutterBottom
        >
          Psyclon Nine w/Clockwork Echo, Our Frankenstein and Corvin's Breed
        </Typography>
        <Typography
          variant='h6'
          component='h5'
          sx={{ color: 'white' }}
          gutterBottom
        >
          March 1, 2023 - Mohawk Place, Buffalo NY
        </Typography>
        <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
          30 minute live industrial set
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
            src='https://www.youtube.com/embed/8-il8KLb1Y8?controls=0'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </Grid>
      <Grid item sm={12}>
        <Typography
          component='h4'
          variant='h5'
          sx={{ color: 'white' }}
          gutterBottom
        >
          Revolution Gallery Lounge, Buffalo NY
        </Typography>
        <Typography sx={{ color: 'white' }} variant='h6' component='h5'>
          April 2, 2022
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

function VideoPanel() {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState('');

  const handleClose = () => setOpen(false);
  const handleClick = (item: any) => {
    setOpen(true);
    setVideo('http://chuckleone.com/video/folding.mp4');
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography
            variant='h6'
            component='h4'
            sx={{ color: '#fff' }}
            gutterBottom
          >
            Infinite Folding
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'white' }} gutterBottom>
            Staella iOS
          </Typography>
          <div
            style={{
              backgroundImage: `url(${Folding})`,
            }}
            className='video-thumb'
          >
            <div className='play-button'>
              <IconButton size='large' onClick={handleClick}>
                <PlayCircleOutlineIcon
                  style={{ width: '64px', height: '64px' }}
                />
                <span className='sr-only'>Play Video</span>
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
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
          <VideoPlayer video={video} />
        </Box>
      </Dialog>
    </>
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
    id: `press-kit-tab-${index}`,
    'aria-controls': `press-kit-tabpanel-${index}`,
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
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 640 },
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Tabs
          variant='scrollable'
          scrollButtons='auto'
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
          aria-label='press kit tabs'
        >
          <Tab label='Bio' {...a11yProps(0)} />
          <Tab label='Discography' {...a11yProps(1)} />
          <Tab label='Live' {...a11yProps(2)} />
          <Tab label='Music Videos' {...a11yProps(3)} />
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
      <TabPanel value={value} index={3}>
        <VideoPanel />
      </TabPanel>
    </Box>
  );
}

const Music = () => {
  useEffect(() => {
    document.title = 'Chuck Leone | Music';
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default Music;
