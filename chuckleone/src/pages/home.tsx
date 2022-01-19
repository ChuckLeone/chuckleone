// @ts-nocheck
import React, { useState } from "react";
import {
  Container,
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VaporCanyon from "../assets/vapor-canyon.jpg";
import BeneathTheSand from "../assets/beneath-the-sand-jacket.jpg";
import Samurai from "../assets/3d-samurai.jpg";
import MonstersAndMachines from "../assets/banner-lg-mam.jpg";
import Voices from "../assets/soundscape-voices-from-the-ether-screenshot.jpg";
import Navigation from "../shared-components/Navigation";

const Home = () => {
  const backgrounds = [
    {
      id: 1,
      file: VaporCanyon,
      title: "Vapor Canyon",
      description: "VR Experience | Adobe Photoshop + Unity 3D",
    },
    {
      id: 2,
      file: Samurai,
      title: "Samurai",
      description: "3D Model | Medium by Adobe",
    },
    {
      id: 3,
      file: BeneathTheSand,
      title: "Beneath the Sand",
      description: "Book Cover/Dust Jack | Adobe Photoshop",
    },
    {
      id: 4,
      file: MonstersAndMachines,
      title: "Monsters and Machines",
      description:
        "Logo + Brand + Website | Adobe Photoshop + ReactJS + Material UI",
    },
    {
      id: 5,
      file: Voices,
      title: "Voices from the Ether",
      description: "Sound Desgin | Modular Synthesizer",
    },
  ];
  const [page, setPage] = useState(1);
  const [background, setBackground] = useState(backgrounds[0]);

  const handleChange = (event, value) => {
    setPage(value);
    const arrayIndex = value - 1;
    setBackground(backgrounds[arrayIndex]);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background.file})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#000",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5",
          color: "white",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <Container>
          <Grid container sx={{ minHeight: "65vh" }}>
            <Grid item sm={12}>
              <Navigation />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12} lg={12} sx={{ marginLeft: "20px" }}>
              <Typography variant="h1" component="h1" sx={{ marginLeft: 0 }}>
                CHUCK LEONE
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{ marginLeft: "4px" }}
              >
                Developer | Designer | Artist
              </Typography>
            </Grid>
            <Grid item sm={12} sx={{ textAlign: "center", marginTop: "10px" }}>
              <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.6)" }}>
                {background.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.6)" }}
              >
                {background.description}
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={12}
              lg={12}
              sx={{ textAlign: "center", alignItems: "center" }}
            >
              <Stack spacing={2} direction="column" sx={{ display: "flex" }}>
                <Pagination
                  count={backgrounds.length}
                  color="secondary"
                  page={page}
                  onChange={handleChange}
                  renderItem={(item) => (
                    <PaginationItem
                      sx={{ color: "#fff" }}
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
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
