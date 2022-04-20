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
    width: "75%",
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
    whiteSpace: "pre-line",
    fontSize: "1.2rem",
    width: "50%",
    textAlign: "justify",
  },
  textCenter: {
    margin: "0",
    fontSize: "1.2rem",
    width: "55%",
    textAlign: "center",
  },
  textCenter2: {
    margin: "0",

    width: "55%",
    textAlign: "center",
  },

  title: {
    margin: "0",
    marginTop: "4rem",
    textAlign: "center",
    width: "60%",
    padding: "0 2rem",
  },

  button: {
    width: "35%",
    margin: "2rem",
    // padding: "3rem",
    // fontSize: "1.2rem",
  },

  buttons: {
    width: "55%",
    margin: "0",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cancel: {
    width: "30%",
  },
  agree: {
    width: "65%",
  },

  // link: {
  //   textDecoration: "none",
  //   color: "white",
  // },

  line: {
    backgroundColor: "gray",
  },
  note: {
    width: "50%",
  },
  pusher: {
    height: "4rem",
    margin: "0",
  },
}));

const Page4 = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  // const quitHandler = () => {
  //   window.close();
  // };

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <h1 className={classes.title}>
          Thank you for taking the time to complete our survey. Your help us
          very much appreciated.
        </h1>

        <p className={classes.textCenter}>
          If you have any questions or concerns, please email the lead
          researchers:
        </p>

        <p className={classes.textCenter}>
          ⬤ <b>Reseach Group</b> {"("}research@lmao.com{")"}
        </p>

        {/* <hr className={classes.line} /> */}
        {/* <div className={classes.line} /> */}

        <h2 className={classes.textCenter2}>
          Interested in a summary of the survey?
        </h2>

        <p className={classes.text}>
          If you would like to receive a summary of the survey findings OR if
          you are happy to be contacted by Lmao about future research, please
          provide your details below and tick the relevants box/es.{"\n"}If you
          change your mind, you can always opt-out at a later date.
        </p>

        <i className={classes.note}>
          <b>Please note:</b> your name and email address will not be linked
          with your survey answers.
        </i>

        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            className={classes.cancel}
            onClick={() => navigate(-1)}
          >
            Back to Survey
          </Button>

          <Button variant="contained" className={classes.agree} color="primary">
            Submit
          </Button>
        </Box>

        <div></div>
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page4;
