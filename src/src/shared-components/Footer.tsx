import React from "react";
import { Grid, Divider, Typography } from "@mui/material";

const Footer = () => {
  const getDate = () => {
    return new Date().getFullYear();
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Grid item sm={12}>
        <Divider />
      </Grid>
      <Grid item sm={12}>
        <a
          href="mailto:chuckleone@gmail.com"
          style={{
            textDecoration: "none",
            color: "#fff",
            paddingRight: "16px",
          }}
        >
          <Typography variant="caption">Email</Typography>
        </a>
        <a
          href="https://www.linkedin.com/in/chuckleone/"
          target="new"
          style={{
            textDecoration: "none",
            color: "#fff",
            paddingRight: "16px",
          }}
        >
          <Typography variant="caption">LinkedIn</Typography>
        </a>
        <a
          href="https://github.com/ChuckLeone"
          target="new"
          style={{
            textDecoration: "none",
            color: "#fff",
            paddingRight: "16px",
          }}
        >
          <Typography variant="caption">GitHub</Typography>
        </a>
        <a
          href="https://sketchfab.com/chuckleone"
          target="new"
          style={{
            textDecoration: "none",
            color: "#fff",
            paddingRight: "16px",
          }}
        >
          <Typography variant="caption">Sketchfab</Typography>
        </a>

        <a
          href="https://www.artstation.com/chuckleone"
          target="new"
          style={{
            textDecoration: "none",
            color: "#fff",
            paddingRight: "16px",
          }}
        >
          <Typography variant="caption">Artstation</Typography>
        </a>
      </Grid>

      <Grid item sm={6}>
        <Typography variant="caption" sx={{ color: "#a7a7a7" }}>
          Copyright © {getDate()} Chuck Leone{" "}
        </Typography>
      </Grid>
      <Grid item sm={6} sx={{ textAlign: "right" }}>
        <Typography variant="caption" sx={{ color: "#a7a7a7" }}>
          Developer | Designer | Artist
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
