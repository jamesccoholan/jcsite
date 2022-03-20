import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/landingPageSections/roadmapStyle";

// import HeaderLinks from "components/Header/HeaderLinks.js";

const useStyles = makeStyles(styles);

const roadmapItems = [
  {
    phase: "DAC",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Blockchain-Native Virtual Media (pre-launch)",
        description:
          "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      },
      {
        title: "Virtual Concerts",
        description:
          "Photo-real fully immersive concert experience featuring original virtual artists minted on the blockchain.",
      },
      {
        title: "Original Music",
        description:
          "A Percentage of Music Royalties. Incredible Original and Generative Music. The artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
  {
    phase: "LightTwist",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Democratizing Access to High End Virtual Production",
        description:
          "LightTwist (YC 21) is a Mac app that turns your room into a customizable virtual video studio. Making virtual production tech accessible to creators on a Mac without needing special equipment or 3D game engine knowledge. We’re leveraging the Mac for real-time feedback and recording, and a powerful GPU server for higher-quality post-production and rendering using the Unreal and Unity Engines.",
      },
      {
        title: "Responsibilities",
        description:
          "Access to Exclusive and Limited Edition Luxury Fashion Merchandise. Each Disconaut has a unique look that leans into various sub-genres of music culture. Own the physical merchandise of your on-chain NFT.",
      },
    ],
  },
  {
    phase: "SYB Creative",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Media Production and Live Events",
        description:
          "A creative media agency focused on production, distribution of next-gen media products.",
      },
      {
        title: "Blockchain-Native Virtual Media (pre-launch)",
        description:
          "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      },
      {
        title: "Virtual Concerts",
        description:
          "Photo-real fully immersive concert experience featuring original virtual artists minted on the blockchain.",
      },
      {
        title: "Original Music",
        description:
          "A Percentage of Music Royalties. Incredible Original and Generative Music. The artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
  {
    phase: "William Morris Endeavour",
    img: "https://ik.imagekit.io/mbhxghyf1m2/226580_IUC1wV5Kvn3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645152762381",
    items: [
      {
        title: "Talent Agency",
        description:
          "A creative media agency focused on production, distribution of next-gen media products.",
      },
      {
        title: "Blockchain-Native Virtual Media (pre-launch)",
        description:
          "NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.",
      },
      {
        title: "Virtual Concerts",
        description:
          "Photo-real fully immersive concert experience featuring original virtual artists minted on the blockchain.",
      },
      {
        title: "Original Music",
        description:
          "A Percentage of Music Royalties. Incredible Original and Generative Music. The artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
];

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <Fade duration={1000} bottom cascade>
            <div>
              <h1 className={classes.title}>Experience</h1>
              <h4 className={classes.description}>
                {
                  "Technology and innovation-focused former founder, product developer, project manager, and growth driver. Extensive experience across the entertainment industry, including major label, major talent agency, music & film production, and finance."
                }
                {/* <HeaderLinks /> */}
                <h1 />
              </h4>
            </div>
          </Fade>

          <div className={classes.roadmapContainer}>
            {roadmapItems.map((r) => (
              <Fade duration={1000} bottom cascade key={r.phase}>
                <div className={classes.roadmapSectionContainer}>
                  <img
                    src={r.img}
                    alt="Disconaut Helmet"
                    className={classes.roadmapDot}
                  />
                  <div className={classes.roadmapSection}>
                    <h1 className={classes.roadmapPhase}>{r.phase}</h1>
                    {r.items.map((item) => (
                      <div key={item.title}>
                        <h3 className={classes.roadmapItemTitle}>
                          {item.title}
                        </h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={classes.roadmapDivider} />
                </div>
              </Fade>
            ))}
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
