import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    // position: "static",
    // position: "fixed",
    width: "100%",
    background: "#040a4f",
    fontFamily: "'Open Sans', cursive",
    marginTop: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: { color: "white", marginRight: "2rem", padding: "1.7rem" },
}));

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
