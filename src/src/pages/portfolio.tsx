import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import TopBar from '../shared-components/TopBar';
import Footer from '../shared-components/Footer';
import BeneathTheSand from '../assets/cover-bts-thumb.jpg';
import MonstersAndMachines from '../assets/mam-thumb.jpg';
import Eve from '../assets/eve.jpg';
import HPS from '../assets/hps-thumb.jpg';
import MGH from '../assets/mgh-thumb.jpg';
import DataViz1 from '../assets/data-viz1.jpg';
import TargetEarth from '../assets/te-thumb.jpg';
import LightWingHunter from '../assets/3d-lightwing-hunter.jpg';
import GalleryModal from '../shared-components/Modal';
import Gathr from '../assets/gathr-thumb.jpg';
import CadenceChatExport from '../assets/cadence-chat-thumb.jpg';
import Samurai from '../assets/samurai.jpg';
import Citybration from '../assets/citybration-thumb.jpg';
import Toshiba from '../assets/toshiba-thumb.jpg';

const MediaCards = () => {
  const itemData = [
    {
      img: CadenceChatExport,
      title: 'Candence Chat Export UI',
      description: 'Vue Web App',
      details: 'Chat export feature built in Vue',
      link: '/portfolio/details/mr',
      tags: [
        { id: 0, title: 'Vue' },
        { id: 1, title: 'Bootstrap' },
        { id: 2, title: 'JavaScript' },
        { id: 3, title: 'HTML' },
        { id: 4, title: 'CSS' },
        { id: 5, title: 'UX Design' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: MonstersAndMachines,
      title: 'Monsters and Machines',
      description: 'Logo | Product Design | Branding | React Web App',
      details:
        'Logo/brand identity and website for a line of original 3D printed products',
      link: '/portfolio/details/mam',
      tags: [
        { id: 0, title: 'React' },
        { id: 1, title: 'Material UI' },
        { id: 2, title: 'JavaScript' },
        { id: 3, title: 'Logo' },
        { id: 4, title: 'Branding' },
        { id: 5, title: 'Packing' },
      ],
      buttonText: 'View Porfolio',
    },
    {
      img: MGH,
      title: 'MyGovHub',
      description: 'Angular Web App',
      details:
        'Resident portal/Web site for MyGoveHub Harris Local Government - a division of Harris Computer',
      link: '/portfolio/details/mgh',
      tags: [
        { id: 0, title: 'AngularJS' },
        { id: 1, title: 'JavaScript' },
        { id: 2, title: 'HTML' },
        { id: 3, title: 'CSS' },
        { id: 4, title: 'UX Design' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: HPS,
      title: 'Harris Print Solutions',
      description: 'AngularJS Web App',
      details:
        'Logo/brand identity and web site for Harris Print Solutions - a division of Harris Computer',
      link: '/portfolio/details/hps',
      tags: [
        { id: 0, title: 'AngularJS' },
        { id: 1, title: 'JavaScript' },
        { id: 2, title: 'HTML' },
        { id: 3, title: 'CSS' },
        { id: 4, title: 'UX Design' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: Gathr,
      title: 'Gathr App',
      description: 'Mobile App Design',
      details: 'Logo/brand identity and mobile app design',
      link: '/portfolio/details/gathr',
      tags: [
        { id: 0, title: 'Design Guide' },
        { id: 1, title: 'Logo' },
        { id: 2, title: 'App Design' },
        { id: 3, title: 'Mood Boards' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: Toshiba,
      title: 'Toshiba Native Apps',
      description: 'UX Design | Native App Design',
      details: 'UX Design | Native App Design',
      link: '/portfolio/details/toshiba',
      tags: [
        { id: 0, title: 'UX Design' },
        { id: 1, title: 'Native App Design' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: Citybration,
      title: 'Citybration Logo',
      description: 'Logo Design',
      details: 'Logo design',
      link: '/portfolio/details/citybration',
      tags: [
        { id: 0, title: 'Logo' },
        { id: 1, title: 'Sketch' },
      ],
      buttonText: 'View Portfolio',
    },
    {
      img: DataViz1,
      title: '3D Data Visualization',
      description: 'Displaying data with ThreeJS and React Three Fiber',
      details: 'Displaying data with ThreeJS and React Three Fiber',
      link: 'http://chuckleone.com/3d/data1/',
      tags: [
        { id: 0, title: 'React' },
        { id: 1, title: 'ThreeJS' },
        { id: 2, title: 'JavaScript' },
      ],
      buttonText: 'View Data',
    },
    {
      img: BeneathTheSand,
      title: 'Beneath the Sand',
      description: 'Book Jacket designed in Adobe Photoshop',
      details: 'Book cover/jacket design for the novel by Katherin L. Bichler',
      link: 'https://katherinebichler.com/',
      tags: [
        { id: 0, title: 'Photoshop' },
        { id: 1, title: 'Graphic Design' },
      ],
      buttonText: 'Visit KatherineBichler.com',
    },
    {
      img: Eve,
      title: 'Cyborg - WIP',
      description: '3D Model sculpted in Medium by Adobe',
      details: '3D model sculpted in Medium by Adobe',
      link: 'http://chuckleone.com/3d/eve/',
      tags: [{ id: 0, title: '3D Modeling' }],
      buttonText: 'View Model',
    },
    {
      img: LightWingHunter,
      title: 'Light Wing Hunter',
      description: '3D Model sculpted in Medium by Adobe',
      details: '3D model sculpted in Medium by Adobe',
      tags: [{ id: 0, title: '3D Modeling' }],
      buttonText: 'View Larger Image',
      gallery: true,
    },
    {
      img: Samurai,
      title: 'Samurai',
      description: '3D Model | Medium by Adobe',
      details: '3D Model sculpted and rendered in Medium by Adobe',
      tags: [{ id: 0, title: '3D Modeling' }],
      buttonText: 'View Larger Image',
      gallery: true,
    },
    {
      img: TargetEarth,
      title: 'Target Earth',
      description: 'HTML 5 Canvas Game',
      details: 'Canvas game written in JavaScript',
      link: 'https://chuckleone.com/html5/games/target-earth/',
      tags: [
        { id: 0, title: 'Photoshop' },
        { id: 1, title: 'JavaScript' },
      ],
      buttonText: 'Play Now',
    },
  ];

  const [open, setOpen] = useState(false);
  const [galleryItem, setGalleryItem] = useState([]);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    document.title = 'Chuck Leone | Portfolio';
  }, []);

  const handleClick = (item: any) => {
    setOpen(true);
    setGalleryItem(item);
  };
  return (
    <>
      {itemData.map((item) => (
        <Grid item key={item.img}>
          <Card sx={{ maxWidth: 300, marginBottom: '8px' }}>
            <CardMedia
              component='img'
              height='300'
              image={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.description}
            />
            <CardContent style={{ background: '#333' }}>
              <Typography
                gutterBottom
                variant='h6'
                component='div'
                sx={{ color: 'white' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ color: 'white' }}
              >
                {item.description}
              </Typography>
              <div style={{ paddingTop: '16px', margin: '0' }}>
                {item.tags.map((tag) => (
                  <Chip key={tag.id} label={tag.title} sx={{ margin: '8px' }} />
                ))}
              </div>
            </CardContent>
            <CardActions style={{ background: '#333' }}>
              {!item.gallery && (
                <Button variant='outlined' href={`${item.link}`}>
                  {item.buttonText}
                </Button>
              )}
              {item.gallery && (
                <Button variant='outlined' onClick={() => handleClick(item)}>
                  View Larger Image
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
      <GalleryModal open={open} onClose={handleClose} item={galleryItem} />
    </>
  );
};

const Portfolio = () => {
  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <TopBar />
      <main>
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant='h2' className='sr-only'>
                  Portfolio
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginRight: '30px' }}>
                <Typography
                  variant='h4'
                  component='h3'
                  sx={{ color: 'white', marginBottom: '16px' }}
                >
                  Summary
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'white', marginBottom: '20px' }}
                >
                  Over two decades of experience designing and developing
                  engaging and innovative cross-platform software products that
                  push the envelope of user interface design. Goal oriented,
                  excellent communication skills, highly motivated,
                  self-educating and thrives working in an agile environment.
                  Passionate about design, development, emerging technologies,
                  art and music.
                </Typography>

                <Typography variant='body1' sx={{ color: 'white' }}>
                  Highly proficient in WCAG/ADA compliant web app development
                  using JavaScript, TypeScript and JavaScript frameworks such as
                  React, Angular and Vue along with Material UI, Bootstrap, CSS,
                  HTML, StorybookJS, Axe, WAVE, Lighthouse, NVDA, Cypress,
                  Microsoft Azure and other tools. Expert User Experience Design
                  skills including user research and personas, information
                  architecture, visual communication, wireframing and
                  prototyping using Figma, Sketch, Adobe XD and other tools.
                  Able to quickly solve problems and provide creative solutions
                  in a logical manner. Continuously prototyping and developing
                  new physical and virtual products and experiences using
                  Autodesk Fusion 360, Unity 3D, Adobe Medium, Blender3D,
                  Gravity Sketch and Google Blocks.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ marginTop: '10px', marginRight: '30px' }}
              >
                <Typography
                  variant='h6'
                  component='h4'
                  sx={{ color: 'white' }}
                  gutterBottom
                >
                  Skills
                </Typography>
                <div>
                  <Chip label='UX Design' sx={{ margin: '8px' }} />
                  <Chip label='Frontend Development' sx={{ margin: '8px' }} />
                  <Chip label='React' sx={{ margin: '8px' }} />
                  <Chip label='TypeScript' sx={{ margin: '8px' }} />
                  <Chip label='Vue' sx={{ margin: '8px' }} />
                  <Chip label='Angular' sx={{ margin: '8px' }} />
                  <Chip label='JavaScript' sx={{ margin: '8px' }} />
                  <Chip label='Material UI' sx={{ margin: '8px' }} />
                  <Chip label='CSS' sx={{ margin: '8px' }} />
                  <Chip label='HTML' sx={{ margin: '8px' }} />
                  <Chip label='.net' sx={{ margin: '8px' }} />
                  <Chip label='Adobe Creative Suite' sx={{ margin: '8px' }} />
                  <Chip label='Unity 3D' sx={{ margin: '8px' }} />
                  <Chip label='Blender' sx={{ margin: '8px' }} />
                  <Chip label='Autodesk Fusion 360' sx={{ margin: '8px' }} />
                </div>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: '30px' }}>
                <Typography variant='h4' component='h5' sx={{ color: 'white' }}>
                  Examples of Work
                </Typography>
                <Grid
                  container
                  spacing={3}
                  sx={{ marginTop: '16px', margin: 'auto' }}
                >
                  <MediaCards />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Footer />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Portfolio;
