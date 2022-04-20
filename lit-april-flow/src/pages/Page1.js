import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { makeStyles } from "@mui/styles";

import Paragraph from "../components/Page1/Paragraph";

const text = [
  {
    title: "Why are we asking you to take part?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "What would i need to do?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nCurabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "How will we use the information?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "What if i change my mind?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "How can i find out the result of the research?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
  {
    title: "Who do i contact to ask question, or if i want to complain?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet est ut sodales blandit. Ut rhoncus accumsan dui, at ornare justo cursus sit amet. Nam eget aliquam sapien, id pellentesque urna. Nullam accumsan vitae est sit amet placerat. Proin mollis, tellus vitae porta dictum, odio ligula imperdiet ante, vel porttitor lorem neque at orci. Vivamus ut risus sit amet odio convallis eleifend. Donec sed lorem ligula. Ut vel nunc faucibus, faucibus nibh nec, condimentum ex. Sed eget lacus mattis, feugiat mi et, dictum diam. Donec at fermentum urna. Sed luctus, enim in lobortis consectetur, lorem enim congue ex, eu efficitur tortor eros sit amet erat. Aliquam non sem pulvinar, eleifend purus vitae, vestibulum nisi. Etiam suscipit felis eu tristique fringilla. ",
  },
];

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",

    minHeight: "calc(100vh - 8rem)",
    marginBottom: "-4rem",
    padding: "5rem 0",
  },
  box: {
    width: "90%",
    // margin: "0 3rem",
    margin: "auto",
    border: "3px solid #e3e3e3",
    borderRadius: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "0.8rem",
  },
  title: {
    margin: "0",
    marginTop: "4rem",
    padding: "0 2rem",
  },
  title2: {
    margin: "0",

    padding: "0 2rem",
  },
  small_box: {
    width: "70%",
    margin: "2rem 0",
    // padding: "2rem",

    borderRadius: "3rem",
    backgroundColor: "#b8d7ff",

    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    width: "70%",
    margin: "2rem 0",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancel: {
    // background: "red",
    // color: "#040a4f",
    color: "red",
    width: "30%",
  },
  agree: {
    width: "65%",
    background: "#040a4f",
    color: "white",
  },
  disagree: {
    width: "65%",
    background: "white",
    color: "gray",
    outline: "none",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  pusher: {
    height: "4rem",
    margin: "0",
  },
}));

const Page1 = () => {
  const classes = useStyles();

  const [agree, setAgree] = useState(false);

  // let recaptcha_response = "";

  // const submitUserForm = () => {
  //   if (recaptcha_response.length == 0) {
  //     document.getElementById("g-recaptcha-error").innerHTML =
  //       '<span style="color:red;">This field is required.</span>';
  //     return false;
  //   }
  //   return true;
  // };

  // const verifyCaptcha = (token) => {
  //   recaptcha_response = token;
  //   document.getElementById("g-recaptcha-error").innerHTML = "";
  // };

  const quitHandler = (e) => {
    e.preventDefault();
    window.close();
  };

  console.log(grecaptcha.getResponse());

  return (
    <div className={classes.container}>
      <Box
        className={classes.box}
        // sx={{
        //   backgroundColor: "primary.dark",
        //   "&:hover": {
        //     backgroundColor: "primary.main",
        //     opacity: [0.9, 0.8, 0.7],
        //   },
        // }}
      >
        <h1 className={classes.title}>Thank you for you interest</h1>

        <i className={classes.title2}>Please read the in formation below</i>

        <Box className={classes.small_box}>
          {text.map((para, index) => (
            <Paragraph title={para.title} desc={para.desc} key={index} />
          ))}
        </Box>

        {/* https://stackoverflow.com/questions/3232904/using-recaptcha-on-localhost */}
        <div
          className="g-recaptcha"
          data-sitekey="6Lc5WYQfAAAAAFNWBSXRahFUMtMzxP9ROBGWFgI1"
        />
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" async defer />
        </Helmet>

        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            className={classes.cancel}
            onClick={quitHandler}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            // variant="outlined"
            // className={agree ? classes.agree : classes.disagree}
            className={classes.agree}
            color="primary"
            disabled={!agree}
          >
            <Link to="/page_2" className={classes.link}>
              I have read and agree with the term of use
            </Link>
          </Button>
        </Box>

        {/* <Button color="primary" variant="contained">
          test
        </Button> */}
      </Box>

      <div className={classes.pusher} />
    </div>
  );
};

export default Page1;
