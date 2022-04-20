import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/reducers/counterReducer";

// https://css-tricks.com/couple-takes-sticky-footer/
const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",
    minHeight: "calc(100vh - 8rem)",
    marginBottom: "-4rem",
    padding: "5rem 0",
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
  buttons: {
    width: "70%",
    margin: "2rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  textField: {
    width: "70%",
  },
  pusher: {
    height: "4rem",
    margin: "0",
  },
  sub_container: {
    display: "flex",
    alignItems: "center",
  },
}));

const Page2 = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateText = (e) => {
    // e.preventDefault();
    // console.log(e.target.value.length);
    dispatch(
      counterActions.update({
        text: e.target.value,
        length: e.target.value.length,
      })
    );
  };

  const { text, counter, valid } = useSelector((state) => state.textCounter);

  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <Box className={classes.buttons}>
          <Button
            // variant="outlined"
            // className={classes.sub_container}
            onClick={() => navigate(-1)}
            startIcon={<ChevronLeftIcon />}
          >
            Back
          </Button>

          <p>1/1</p>
        </Box>

        <h1 className={classes.textCenter}>
          Please tell us which touchscreen game, app or story you use most often
          with your child and why
        </h1>

        <div className={classes.textField}>
          {/* https://stackoverflow.com/questions/45939909/put-length-constraint-in-a-textfield-in-react-js */}
          <TextField
            type="text"
            value={text}
            autoFocus={true}
            fullWidth={true}
            multiline={true}
            rows={10}
            size="medium"
            error={!valid}
            onChange={updateText}
            inputProps={{ maxLength: 2000 }}
          />
        </div>

        <p className={valid ? classes.textCenter : classes.red}>
          {counter}/2000 characters left
        </p>

        <Button
          component={Link}
          to="/page_4"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={!valid}
        >
          Continue
        </Button>

        <div />
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page2;
