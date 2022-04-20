import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    // position: "sticky",
    // position: "fixed",
    // bottom: "0",
    // right: "0",
    // left: "0",

    margin: "0",

    height: "4rem",

    width: "100%",
    background: "#040a4f",
    fontFamily: "'Open Sans', cursive",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    marginRight: "2rem",
    padding: "1.7rem",
  },
}));

// https://css-tricks.com/couple-takes-sticky-footer/
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        In collaboration with BKU
      </Typography>
    </div>
  );
};

export default Footer;
