import { Box, Button, Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/smst.JPG";
import image2 from "../../images/plywood1.JPG";
import image3 from "../../images/Plywood2.JPG";
import image4 from "../../images/admin1.JPG";
import image5 from "../../images/fitness1.JPG";
import image6 from "../../images/fitness2.JPG";
import image7 from "../../images/fitness3.JPG";
import image8 from "../../images/bartan1.JPG";
import image9 from "../../images/web1.JPG";



export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "SMSST NGO ", link: "https://smsst.netlify.app/" },
    { url: image2, title: "Plywood Industry ", link: "https://plywoodindustry.netlify.app" },
    { url: image3, title: "Plywood Industry ", link: "https://plywood.netlify.app" },
    { url: image4, title: "Admin", link: "https://tekariweb-admin.netlify.app/" },
    { url: image5, title: "Fitness ", link: "https://fitness-1.netlify.app/" },
    { url: image6, title: "Fitness ", link: "https://fitness-2.netlify.app/" },
    { url: image7, title: "Fitness ", link: "https://fitness-3.netlify.app/" },
    { url: image8, title: "Nirmal Bartan ", link: "https://8bqi4.csb.app/" },
    { url: image9, title: "Webinfologic ", link: "https://96ymf.csb.app/" },

  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>

      <Grid
        container
        style={{
          displa: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}>
        <Grid item xs={12} sm={8}>
          {RenderSectionHeading({
            smallText: "Portfolio",
            heading: "Let's See My Work",
            alignCenter: true,
          })}
        </Grid>
      </Grid>
      {/* imge section  */}

      <Container maxWidth='xl'>
        <Grid container spacing={2}>
          {portfolioData.map((item, i) => (
            <Grid item xs={6} sm={6} lg={4} key={i}>
              <Box className={classes.imageContainer}>
                <img
                  src={item.url}
                  alt={item.title}
                  className={classes.responsiveImg}
                />
                <Box className={classes.imageOverlay}>
                  <Typography className={classes.overlayTitle}>
                    {item.title}
                  </Typography>

                  <Button variant='contained' >
                    <Link href={item.link} target="_blank" rel="noopener"
                      component="a"
                      color="inherit"
                      underline="none"
                      variant="body2">
                      visit
                    </Link></Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
}
