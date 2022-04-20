import { Box, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";

// https://css-tricks.com/couple-takes-sticky-footer/
const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",

    minHeight: "calc(100vh - 8rem)",
    marginBottom: "-4rem",
    paddingTop: "5rem",
  },
  box: {
    width: "70%",
    margin: "auto",
    border: "3px solid #e3e3e3",
    borderRadius: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    rowGap: "2rem",
    color: "#13428f",
  },
  textCenter: {
    margin: "0",

    fontSize: "1.2rem",
    width: "55%",
    textAlign: "center",
  },
  title: {
    margin: "0",
    marginTop: "4rem",
  },

  button: {
    width: "25%",
    margin: "2rem",
  },

  // link: {
  //   textDecoration: "none",
  //   color: "white",
  // },
  pusher: {
    height: "4rem",
    margin: "0",
  },
}));

const Page6 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <h1 className={classes.title}>Thank you!</h1>

        <p className={classes.textCenter}>We appreciated your time so far!</p>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            window.location = "https://gameloft.com";
          }}
        >
          {/* <a className={classes.link} href="https://gameloft.com"> */}
          Back to Lmao
          {/* </a> */}
        </Button>

        <div />
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page6;
