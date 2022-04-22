import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  input: {
    width: "50%",
  },
}));

const Form = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = (e) => {
    let hasNumberRegex = /\d/;

    if (hasNumberRegex.test(e.target.value)) {
      // console.log("No number");

      // Do something

      return;
    }

    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailBlurHandler = (e) => {
    var emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(e.target.value)) {
      // console.log("No valid");

      // Do something

      return;
    }
  };

  return (
    <Fragment>
      <div className={classes.input}>
        <TextField
          id="name"
          value={name}
          onChange={nameChangeHandler}
          label="Name"
          variant="outlined"
          fullWidth
        />
      </div>

      <div className={classes.input}>
        <TextField
          id="mail"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          label="Emai"
          variant="outlined"
          fullWidth
        />
      </div>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to receive a summary of the survey findings."
        />

        <FormControlLabel
          control={<Checkbox />}
          label="I agree to be contacted by Gameloft about future research."
        />
        {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
      </FormGroup>
    </Fragment>
  );
};

export default Form;
