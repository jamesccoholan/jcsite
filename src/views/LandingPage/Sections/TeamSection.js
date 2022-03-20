import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const team = [
  {
    name: "DAC",
    job: "10K NFT Project",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images2__fLMe4U70.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153723074",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dactestcollection"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  {
    name: "Agora",
    job: "Unreal Engine Virtual Concerts",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images1_4stx-zdRZzl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724360",
    link: (
      <a
        href="https://www.experienceagora.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://www.linkedin.com/pulse/agora-white-paper-james-coholan/"
        rel="noreferrer"
        target="_blank"
      >
        Whitepaper
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=QeVeqU00p7M"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  {
    name: "Music",
    job: "Have succesfully minted NFT Collections",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images0_Z3xDvQ7i6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724774",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dactestcollection"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  {
    name: "Media Production",
    job: "Video and Music Production",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images3_7mTBHrTis.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153725576",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dactestcollection"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  {
    name: "Web Development",
    job: "Front End Web Programming",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images4_sJ2orbs9_Cu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153723936",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dactestcollection"
        rel="noreferrer"
        target="_blank"
      >
        OpenSea
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  {
    name: "Published Music",
    job: "Growth and Go-To-Market Strategy",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Images5_krfIkyTzE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645153724381",
    link: (
      <a
        href="https://www.discoastronautclub.com/"
        rel="noreferrer"
        target="_blank"
      >
        Website
      </a>
    ),
    link2: (
      <a
        href="https://testnets.opensea.io/collection/dactestcollection"
        rel="noreferrer"
        target="_blank"
      >
        Whitepaper
      </a>
    ),
    link3: (
      <a
        href="https://www.youtube.com/watch?v=ezRnFj08KlI"
        rel="noreferrer"
        target="_blank"
      >
        Trailer
      </a>
    ),
  },
  // {
  //   name: "Technologist",
  //   job: "On the frontier of knowledge and understanding of next gen tech",
  //   img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/11_Sy5D6Z-YW?ik-sdk-version=javascript-1.4.3&updatedAt=1643773690863",
  // },
  // {
  //   name: "Dre",
  //   job: "Content Strategist and Promotion",
  //   img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/9_1frbXBDJw?ik-sdk-version=javascript-1.4.3&updatedAt=1643773717216",
  // },
  // {
  //   name: "Alex",
  //   job: "Video Production",
  //   img: "https://ik.imagekit.io/5ierklngtbt/img/NewSuits/12_3G5yM3e2q?ik-sdk-version=javascript-1.4.3&updatedAt=1643773632536",
  // },
];

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Project Showcase</h2>
      <div>
        <GridContainer>
          {team.map(function (member) {
            return (
              <GridItem key={member.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={member.img}
                      alt="Team Member"
                      className={imageClasses}
                    />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                    <small className={classes.smallTitle}>{member.job}</small>
                    <br />
                    <small className={classes.smallTitle}>{member.link}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link2}</small>
                    &nbsp;&emsp;
                    <small className={classes.smallTitle}>{member.link3}</small>
                  </h4>
                  <CardBody></CardBody>
                  <CardFooter className={classes.justifyCenter}></CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
