import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    color: "#13428f",
    fontFamily: "'Open Sans', cursive",
    // https://stackoverflow.com/questions/39325414/line-break-in-html-with-n
    whiteSpace: "pre-line",
    padding: "0 2rem",
  },
}));

const Paragraph = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default Paragraph;
