import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import FavoriteIcon from "@material-ui/icons/Favorite";


export default function Footer() {
  const classes = useStyles();
  var date = new Date();

  const scrolltoTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Box className={classes.footerContainer} id='Footer'>
      <IconButton
        className={classes.iconButton}
        activeClass='active'
        onClick={scrolltoTop}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Typography variant='body1' component='h4' align='center' color='inherit'>
        Developed and designed with <FavoriteIcon style={{ color: "red" }} /> by
        TekariWeb , All Right Reserved © {date.getFullYear()}
      </Typography>
    </Box>
  );
}
