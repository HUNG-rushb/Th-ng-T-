import { Box, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",
    marginTop: "8rem",
    overflow: "visible",
    // fontSize: "1.2rem",
  },
  box: {
    width: "90%",
    // padding: "1rem",
    margin: "0 3rem",
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
          style={{ background: "#040a4f" }}
          className={classes.button}
          onClick={() => {
            window.location = "https://gameloft.com";
          }}
        >
          {/* <a className={classes.link} href="https://gameloft.com"> */}
          Back to Lmao
          {/* </a> */}
        </Button>

        <div></div>
      </Box>
    </div>
  );
};

export default Page6;
