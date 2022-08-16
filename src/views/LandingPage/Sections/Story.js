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
                  "Focused and passionate about Product Management, James operates with velocity at the intersection of  finance, media, and technology. He is busy developing, growing, and progressing the frontier of premium on-chain products and experiences. He is a founder, developer, project manager, and growth driver. James began working professionally in entertainment as a television actor in high school before moving to Los Angeles where he attended Occidental College and took internships at Atlantic Records and City National Bank. Following graduation, James joined the William Morris Endeavour Music Department. WME is the largest talent agency in the world and represents clientele such as Drake, The Weeknd, Bruno Mars, and Calvin Harris."
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
                  "Stepping full time into an entrepreneurial endeavor James leveraged his media production, growth marketing, and partnership development abilities to found SYB Creative. The agency has had over 70 successful music releases and sold out esteemed venues across Los Angles such as Warwick, the Sofitel, and the Troubadour. SYB Creative ventured into virtual media, developing a prototype for a virtual concert experience called Agora. This virtual production expertise lead James to join LightTwist as Founding Creative Director, the YC company focused on democratizing real-time 3D game engines for all creators."
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
                  "James original NFT project DAC, is a direct materialization of his efforts to bring premium entertainment properties to the blockchain. Financially endowing consumers to take ownership stakes in their favorite media is the driving goal. Conceptually similar to NBA Top Shop, DAC aims to mint collections of concert highlights. James implemented the minting solution, virtually produced and edited the trailer, developed the landing page, managed content strategy, and 3D design teams, and established and executed the growth and go-to-market strategy."
                }
              </h4>
            </GridItem>
            <GridItem xs={12} sm={4} md={6} className={classes.right}>
              <img
                className={classes.image}
                src={
                  "https://ik.imagekit.io/mbhxghyf1m2/trade-finance-2021-1200-1612375664_cHrfjwF0o.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1652654213370"
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
