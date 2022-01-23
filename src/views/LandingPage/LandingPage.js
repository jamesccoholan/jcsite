import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Fade from "react-reveal/Fade";

import SectionCarousel from "../Components/Sections/SectionCarousel.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import VideoSection from "./Sections/VideoSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import Gallery from "./Sections/Gallery.js";
import Story from "./Sections/Story.js";
// import FAQ from "./Sections/FAQ.js";
// import Video from "./Sections/Video.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Disco Astronaut Club"
        rightLinks={<HeaderLinks />}
        absolute
        {...rest}
      />
      <Parallax filter image={"./assets/img/DACWide.jpg"}>
        <Fade duration={1000} bottom cascade>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Disco Astronaut Club</h1>
                <h2 className={classes.subtitle}>
                  Your Ticket to the Greatest Festival in the Universe
                </h2>
                <h4>A Next Generation Music NFT Project Minting in 2022</h4>
                <br />
                <Button
                  color="gold"
                  size="lg"
                  href="https://youtu.be/ezRnFj08KlI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Trailer
                </Button>
                <Button
                  color="gold"
                  size="lg"
                  href="https://discord.com/invite/bKg4jryrrB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i className="fas fa-play" /> */}
                  Discord
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Fade>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Fade duration={1000} bottom cascade>
            <ProductSection />
          </Fade>
          {/* <FAQ /> */}
        </div>
      </div>
      <div>
        <VideoSection />
        <Story />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Gallery />
          </div>
        </div>
        <WorkSection />
        <SectionCarousel />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
