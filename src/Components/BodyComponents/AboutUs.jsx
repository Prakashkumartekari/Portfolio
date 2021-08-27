import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";


export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: " We are using React for FrontEnd & Express or MongoDb for Backend",
      icon: <DashboardIcon />,
    },
    {
      title: "Graphic Design",
      description: "We are also Providing Graphics for Your Need.",
      icon: <ToysIcon />,
    },
    {
      title: "Mobile Apps",
      description: "We are also Develope a Native or Hybrid Apps.",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description: " We are also Providing Marketing for your Brand.",
      icon: <AcUnitIcon />,
    },
  ];
  return (
    <Box className={classes.section} id='About'>

      <Container>
        <Grid container spacing={1}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <img
                src={image}
                alt=' about us'
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            {RenderSectionHeading({
              smallText: "ABOUT ME",
              heading: "Hello I'm Prakash Kumar",
              description:
                "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
            })}
            <br />
            {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
            <Grid container>
              {cardMediaData.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  {CardMedia({
                    label: item.title,
                    Desc: item.description,
                    Icon: item.icon,
                  })}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
}
