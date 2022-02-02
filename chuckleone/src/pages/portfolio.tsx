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
} from "@mui/material";
import Navigation from "../shared-components/Navigation";
import Footer from "../shared-components/Footer";
import BeneathTheSand from "../assets/cover-bts-thumb.jpg";
import MonstersAndMachines from "../assets/mam-thumb.jpg";
import CyborgEve from "../assets/cyborg-eve.jpg";
import TargetEarth from "../assets/target-earth.jpg";
import LightWingHunter from "../assets/3d-lightwing-hunter.jpg";
import GalleryModal from "../shared-components/Modal";
import { useState } from "react";

const MediaCards = () => {
  const itemData = [
    {
      img: BeneathTheSand,
      title: "Beneath the Sand",
      details: "Book cover/jacket design for the novel by Katherin L. Bichler",
      link: "https://katherinebichler.com/",
      tags: [{ id: 0, title: "photoshop" }],
      buttonText: "More Info",
    },
    {
      img: MonstersAndMachines,
      title: "Monsters and Machines",
      details:
        "Logo/brand identity and webiste for a line of original 3D printed products",
      link: "http://monstersandmachines.com",
      tags: [
        { id: 0, title: "reactjs" },
        { id: 1, title: "materialui" },
        { id: 3, title: "javascript" },
      ],
      buttonText: "Visit Website",
    },
    {
      img: CyborgEve,
      title: "Cyborg - WIP",
      details: "3D model sculpted in Medium by Adobe",
      link: "http://chuckleone.com/3d/eve/",
      tags: [{ id: 0, title: "3dmodeling" }],
      buttonText: "View Model",
    },
    {
      img: LightWingHunter,
      title: "Light Wing Hunter",
      details: "3D model sculpted in Medium by Adobe",
      link: "https://chuckleone.com/html5/games/target-earth/",
      tags: [{ id: 0, title: "3D Modeling" }],
      buttonText: "View Render",
      gallery: true,
    },
    {
      img: TargetEarth,
      title: "Target Earth",
      details: "Canvas game written in JavaScript",
      link: "https://chuckleone.com/html5/games/target-earth/",
      tags: [
        { id: 0, title: "photoshop" },
        { id: 1, title: "javascript" },
      ],
      buttonText: "Play Now",
    },
  ];

  const [open, setOpen] = useState(false);
  const [galleryItem, setGalleryItem] = useState([]);
  const handleClose = () => setOpen(false);

  const handleClick = (item: any) => {
    setOpen(true);
    setGalleryItem(item);
  };
  return (
    <>
      {itemData.map((item) => (
        <Grid item key={item.img}>
          <Card sx={{ maxWidth: 300, marginBottom: "8px" }}>
            <CardMedia
              component="img"
              height="300"
              image={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "white" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                {item.details}
              </Typography>
              <div style={{ paddingTop: "16px", margin: "0" }}>
                {item.tags.map((tag) => (
                  <Chip key={tag.id} label={tag.title} sx={{ margin: "8px" }} />
                ))}
              </div>
            </CardContent>
            <CardActions>
              {!item.gallery && (
                <Button variant="text" href={`${item.link}`}>
                  {item.buttonText}
                </Button>
              )}
              {item.gallery && (
                <Button variant="text" onClick={() => handleClick(item)}>
                  View Larger Image
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
      <GalleryModal open={open} onClose={handleClose} props={galleryItem} />
    </>
  );
};

const Portfolio = () => {
  return (
    <div
      style={{
        backgroundColor: "#171B27",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container>
        <Box sx={{ minHeight: "60px", marginTop: "16px" }}>
          <Grid container>
            <Grid item sm={12} md={12}>
              <Navigation />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ color: "white", marginLeft: 0 }}
              >
                CHUCK LEONE
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{ color: "white", marginLeft: "4px" }}
              >
                Developer | Designer | Artist
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "10px", marginRight: "30px" }}>
              <Typography variant="h6" component="h6" sx={{ color: "white" }}>
                Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "white", marginBottom: "20px" }}
              >
                Over two decades of experience designing and developing engaging
                and innovative cross-platform software products that push the
                envelope of user interface design. Goal oriented, excellent
                communication skills, highly motivated, self-educating and
                thrives working in an agile environment. Passionate about
                design, development, emerging technologies, art and music.
              </Typography>

              <Typography variant="body1" sx={{ color: "white" }}>
                Highly proficient in ADA compliant web app development using
                ReactJS, TypeScript, Node.JS, npm, Material UI and other
                technologies. Expert level skills using the Adobe Creative Suite
                to deliver beautiful designs focusing on usability, layout,
                typography, texture, composition and color. At present, working
                in the higher education software industry focusing on ADA
                compliance using StorybookJS, Axe, Wave, Lighthouse, NVDA and
                other accessibility tools. Comfortable developing in Agile and
                Kanban environments using various development, version control
                and dependency management tools. Able to quickly solve problems
                and provide creative solutions in a logical manner. Currently an
                active member of the BuffaloJS and Buffalo Game Space groups -
                contributing music assets and providing mentorship to students
                during annual game jams. Continuously prototyping and developing
                new physical and virtual products and experiences using Autodesk
                Fusion 360, Unity 3D, Adobe Medium, Blender3D, Gravity Sketch
                and Google Blocks.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "10px", marginRight: "30px" }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ color: "white" }}
                gutterBottom
              >
                Skills
              </Typography>
              <div>
                <Chip label="ReactJS" sx={{ margin: "8px" }} />
                <Chip label="TypeScript" sx={{ margin: "8px" }} />
                <Chip label="JavaScript" sx={{ margin: "8px" }} />
                <Chip label="Material UI" sx={{ margin: "8px" }} />
                <Chip label=".net" sx={{ margin: "8px" }} />
                <Chip label="Adobe Creative Suite" sx={{ margin: "8px" }} />
                <Chip label="Unity 3D" sx={{ margin: "8px" }} />
                <Chip label="Blender" sx={{ margin: "8px" }} />
                <Chip label="Autodesk Fusion 360" sx={{ margin: "8px" }} />
              </div>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: "10px" }}>
              <Typography variant="h6" component="h6" sx={{ color: "white" }}>
                Latest Work
              </Typography>
              <Grid container spacing={3} sx={{ marginTop: "16px" }}>
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
    </div>
  );
};

export default Portfolio;
