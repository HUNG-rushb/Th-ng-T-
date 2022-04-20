import { Box, Button } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",

    minHeight: "calc(100vh - 8rem)",
    marginBottom: "-4rem",
    padding: "5rem 0",
  },
  box: {
    width: "70%",
    // padding: "1rem",
    // margin: "0 3rem",
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
  text: {
    margin: "0",
    //  whiteSpace: "pre-line",
    fontSize: "1.2rem",
    width: "35%",
    textAlign: "justify",
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
    padding: "0 2rem",
  },

  button: {
    width: "35%",
    margin: "2rem",
    // padding: "3rem",
    // fontSize: "1.2rem",
  },

  line: {
    backgroundColor: "gray",
  },
  pusher: {
    height: "4rem",
    margin: "0",
  },
}));

const Page3 = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const quitHandler = () => {
    window.close();
  };

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <h1 className={classes.title}>
          "I no longer want to participate in the survey"
        </h1>

        <p className={classes.textCenter}>Your progress will be lost.</p>

        <p className={classes.text}>
          Your can learn more about the purpose of the survey by contacting our
          lead researchers if you have further questions.
        </p>

        <p className={classes.textCenter}>
          ⬤ <b>Reseach Group</b> {"("}research@lmao.com{")"}
        </p>

        {/* <hr className={classes.line} /> */}
        {/* <div className={classes.line} /> */}

        <p className={classes.text}>
          Are you sure no longer want to take the {"\n"}survey?
        </p>

        <Button
          variant="contained"
          style={{ background: "#040a4f" }}
          className={classes.button}
          onClick={quitHandler}
        >
          I have changed my mind
        </Button>

        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => navigate(-1)}
        >
          Back to survey
        </Button>

        <div></div>
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page3;
