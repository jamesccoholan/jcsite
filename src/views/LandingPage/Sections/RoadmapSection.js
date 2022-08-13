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
  // {
  //   phase: "Brink",
  //   img: "https://ik.imagekit.io/mbhxghyf1m2/6061e9b66445fd43aec03647_Brink_spot-illo02__1__kPyi9XVjm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652717447731",
  //   items: [
  //     {
  //       title: "Building Critical Infrastructure for Decentralized Finance",
  //       description:
  //         "Automate Your Transactions. Conditional orders and automated loss protection for Ethereum.",
  //     },
  //     {
  //       title: "Business Partner Integrations",
  //       description:
  //         "Partnerships and business development, integrating core product.",
  //     },
  //   ],
  // },
  {
    phase: "Minotaur",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-16_at_9.38.47_AM_6vYqYKMcKm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652719148180",
    items: [
      {
        title:
          "Enabling Creators and Brands to Build Seamlessly in the Web3 Era",
        description:
          "Build your brand, sell your work, and grow your community using the power of the blockchain. All on the Minotaur platform.",
      },
      {
        title: "Project Manager",
        description:
          "Business sourcing and end-to-end execution on NFT campaigns.",
      },
    ],
  },
  {
    phase: "AstroChain",
    img: "https://ik.imagekit.io/5ierklngtbt/img/Helmet_Icon_3_HvuJndXuL?ik-sdk-version=javascript-1.4.3&updatedAt=1643768808897",
    items: [
      {
        title: "Founder - Blockchain-Native Virtual Artists and Concerts",
        description:
          "Music-focused NFT project lead developer. Developed cloud-based, multi-GPU, 3D photo-real generative art infrastructure that renders and uploads to IPFS 5-10X faster than typical local machines and is fault-tolerant. Growth and go-to-market strategy lead, Project manager leading a group of 12 including content strategy, music production and 3D design teams. Core blockchain engineer and landing page developer. Scalable photo-real 3D generative art developer. Virtual production (Unreal Engine) and promotional materials editor. Virtual concert producer.",
      },
      {
        title: "Original Virtual Media and Music",
        description:
          "Photo-real fully immersive concert experience featuring original virtual artists minted on the blockchain. NFT Mint. The First On-Chain, Virtually Native Media Franchise. A higher bar for art, music and visual media. The DAC leverages advanced virtual production techniques to create radically compelling entertainment and bring the Disconauts to life. Next-Gen Immersive Virtual Media and 3D Art.A Percentage of Music Royalties. Incredible Original and Generative Music. The artist as an investible asset. DAC will have original music drops that the community takes an ownership stake in. Holders will get music royalties according to the number of DAC NFTs they posses. 10,000 unique generative pieces of music will be ascribed to the NFTs.",
      },
    ],
  },
  {
    phase: "LightTwist (YC 21)",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-16_at_9.33.45_AM_lg-WjFAOD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652718907968",
    items: [
      {
        title: "Founding Creative Director",
        description:
          "LightTwist is a Mac app that turns your room into a customizable virtual video studio. Making virtual production tech accessible to creators on a Mac without needing special equipment or 3D game engine knowledge. We’re leveraging the Mac for real-time feedback and recording, and a powerful GPU server for higher-quality post-production and rendering using the Unreal and Unity Engines.",
      },
      {
        title: "Democratizing Access to High End Virtual Production",
        description:
          "Virtual production and creative direction. Go-to-market strategy, evaluating alpha user experiences to inform engineering and product release initiatives. Technical product management, automated a cloud-native AI video segmentation workflow. Alpha user growth strategist, a growing wait-list of over 1,000 early product access sign-ups. Social media video content producer and strategist. Product development, working with engineers and designers to implement features.",
      },
    ],
  },
  {
    phase: "SYB Creative",
    img: "https://ik.imagekit.io/mbhxghyf1m2/SYB_Creative_Icon_2_bCuqi50Y-.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1652719219082",
    items: [
      {
        title: "Founder",
        description:
          "A creative media agency focused on production, distribution of next-gen media products.",
      },
      {
        title: "Media Production and Live Events",
        description:
          "Digital and virtual media development, production, promotion and distribution. 60% quarter-over-quarter engagement growth through sales partnerships and data-driven digital marketing campaigns. Music streaming and live ticket sales growth strategist. Promotion for live events generating hundreds of thousands of dollars of revenue for multiple stakeholders. (Sold out events include Warwick Halloween, Sofitel at Beverly Hills New Years, The Troubadour, etc.) Coordinated operations between advertising platforms, management teams, concert promoters, digital distribution channels, product designers & manufacturers.",
      },
    ],
  },
  {
    phase: "William Morris Endeavour",
    img: "https://ik.imagekit.io/mbhxghyf1m2/Screen_Shot_2022-05-16_at_9.42.15_AM_AITlY1jow.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652719357291",
    items: [
      {
        title: "Music Department",
        description:
          "Experience contracting performance offers, sales figure report curation and managing artist target calendars, and master schedules. Generated artist and company performance reports using streaming and financial analytics to optimize international bookings and new act acquisition. Deal contracted Calvin Harris 1.5 million dollar Ibiza 2019 summer residency as well as million dollar plus international deals for Bruno Mars and The Weeknd.",
      },
    ],
  },
  {
    phase: "Atlantic Records",
    img: "https://ik.imagekit.io/mbhxghyf1m2/6a1305014288c16f31bc553c3ff149f1_xzIL_9a3E.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652906464586",
    items: [
      {
        title: "Promotions Department",
        description:
          "Worked on campaigns for artists such as Charlier Puth, Wiz Khalifa, and Omarion.",
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
                  "Blockchain, media, finance, and technology and focused founder, product developer, project manager, and growth driver."
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
