import { Fragment } from "react";
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

  return (
    <Fragment>
      <div className={classes.input}>
        <TextField id="name" label="Name" variant="outlined" fullWidth />
      </div>

      <div className={classes.input}>
        <TextField id="mail" label="Emai" variant="outlined" fullWidth />
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
