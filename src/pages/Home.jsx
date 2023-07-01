import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import brochure from "../IMG/brochure.jpg";
import img from "../IMG/img.jpg";
import { Box, Grid } from "@mui/material";
import "../CSS/Home.css";
import HomeSlider from "../components/HomeSlider";
export default function Home() {
  return (
    <>
      <Navbar Home="#FFA500" />
      <HomeSlider />
      <Box className="card-home-container">
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div" width={"100%"}>
            Trained
            <br />
            Professional
          </Box>
        </Box>
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div" width={"100%"}>
            Trained
            <br />
            Professional
          </Box>
        </Box>
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div" width={"100%"}>
            Trained
            <br />
            Professional
          </Box>
        </Box>
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div">
            Trained
            <br />
            Professional
          </Box>
        </Box>
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div">
            Trained
            <br />
            Professional{" "}
          </Box>
        </Box>
        <Box>
          <Box className="img-div" width={"100%"}>
            <img src={img} alt="" />
          </Box>
          <Box className="text-div">
            Trained
            <br />
            Professional{" "}
          </Box>
        </Box>
      </Box>
      <Grid container p={2}>
        <Grid
          className="brochure-img-div"
          container
          justifyContent={"end"}
          item
          md={6}
        >
          <img src={brochure} alt="" width={"100%"} />
        </Grid>
        <Grid
          item
          md={6}
          p={4}
          container
          alignItems={"start"}
          style={{ backgroundColor: "#f8f8f8" }}
          justifyContent={"center"}
          direction={"column"}
        >
          <h2 className="home-h2">JK Vibratory Motors</h2>
          <p className="home-p">Get more information about our products.</p>
          <a className="download-btn">DOWNLOAD BROCHURE</a>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
