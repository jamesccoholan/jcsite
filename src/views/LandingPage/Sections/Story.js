import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/storyStyle.js";

const useStyles = makeStyles(styles);

export default function Story() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade duration={2000} bottom cascade>
        <GridContainer justify="center">
          <br />
          <h1 className={classes.title}></h1>
          <br />
          <GridItem xs={12} sm={10} md={10} className={classes.sectionArea}>
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "I am incredibly passionate about the blockchain space, my goal being to develop, grow and progress the frontier of premium on-chain products and experience. My previous experience in the entertainment industry includes working at William Morris Endeavor, Atlantic Records, and growing a creative music agency I founded. In technology, I have been working as Creative Director at LightTwist, an early-stage Y Combinator startup over the last year."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/pexels-lenin-estrada-2569997_OUtfXc1uS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647981808148"
                }
                alt="Disconaut Scene"
              />
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={4} md={6}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/pexels-pixabay-247676_tWZWSc6vl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647981922587"
                }
                alt="Gathering Scene"
              />
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <h4
                className={classNames(
                  classes.description,
                  classes.descriptionRight
                )}
              >
                {
                  "The NFT project I founded, Disco Astronaut Club, is a direct materialization of my goal to bring entertainment properties to the blockchain. The idea is to mint an artist and allow the community to take part in the appreciation of the brand as it expands with original music releases, and live shows. Conceptually similar to NBA Top Shop, DAC aims to mint collections of concert highlights."
                }
              </h4>
            </GridItem>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={10}
            className={classNames(
              classes.sectionArea,
              classes.sectionAreaMargin
            )}
          >
            <GridItem xs={12} sm={8} md={6}>
              <h4 className={classes.description}>
                {
                  "For this project, I am implementing out minting solution, virtually producing and editing our trailer, developing the landing page, managing content strategy and 3D design teams, and establishing and executing our growth and go-to-market strategy."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/5ierklngtbt/img/story/Party_D7ZilzNIt?ik-sdk-version=javascript-1.4.3&updatedAt=1643773798811"
                }
                alt="Party Scene"
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
