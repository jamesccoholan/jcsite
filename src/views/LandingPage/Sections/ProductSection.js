import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Driving Entertinament Franchises on the Blockchain
          </h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              title="Growth Driver"
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://www.w3schools.com/html/"
              title="Go to W3Schools HTML section"
            >
              TEST
            </a>
            <h5 className={classes.title}>
              Early stage company expansion through premium product.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Creative Direction"
              description="Creative Lead in virtual production and NFT projects."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://example.com/faq.html"
              rel="noreferrer"
              target="_blank"
            >
              Link
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blockchain Engineering"
              description="Blockchain Application developer."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://example.com/faq.html"
              rel="noreferrer"
              target="_blank"
            >
              Link
            </a>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              title="Growth Driver"
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://www.w3schools.com/html/"
              title="Go to W3Schools HTML section"
            >
              TEST
            </a>
            <h5 className={classes.title}>
              Early stage company expansion through premium product.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Creative Direction"
              description="Creative Lead in virtual production and NFT projects."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://example.com/faq.html"
              rel="noreferrer"
              target="_blank"
            >
              Link
            </a>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Blockchain Engineering"
              description="Blockchain Application developer."
              icon={
                "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381"
              }
              alt="Disconaut NFT"
              vertical
            />
            <a
              href="https://example.com/faq.html"
              rel="noreferrer"
              target="_blank"
            >
              Link
            </a>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <h2 className={classes.title}> </h2>
        </GridContainer>
      </div>
    </div>
  );
}
