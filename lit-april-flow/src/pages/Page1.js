import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Paragraph from "../components/Page1/Paragraph";

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Open Sans', cursive",
    marginTop: "8rem",
  },
  box: {
    width: "90%",
    margin: "0 3rem",
    border: "3px solid #e3e3e3",
    borderRadius: "1rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  small_box: {
    width: "70%",
    margin: "2rem 0",
    // padding: "2rem",

    borderRadius: "1rem",
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
    background: "white",
    color: "#040a4f",
    width: "30%",
  },
  agree: {
    width: "65%",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

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

const Page1 = () => {
  const classes = useStyles();

  // let recaptcha_response = "";

  // function submitUserForm() {
  //   if (recaptcha_response.length == 0) {
  //     document.getElementById("g-recaptcha-error").innerHTML =
  //       '<span style="color:red;">This field is required.</span>';
  //     return false;
  //   }
  //   return true;
  // }

  // function verifyCaptcha(token) {
  //   recaptcha_response = token;
  //   document.getElementById("g-recaptcha-error").innerHTML = "";
  // }

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
        <h1>Thank you for you interest</h1>

        <i>Please read the in formation below</i>

        <Box className={classes.small_box}>
          {text.map((para, index) => (
            <Paragraph title={para.title} desc={para.desc} key={index} />
          ))}
        </Box>

        <div
          className="g-recaptcha"
          data-sitekey="6Lc5WYQfAAAAAFNWBSXRahFUMtMzxP9ROBGWFgI1"
        ></div>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>

        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            className={classes.cancel}
            onClick={window.close()}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            className={classes.agree}
            style={{ background: "#040a4f" }}
          >
            <Link to="/page_2" className={classes.link}>
              I have read and agree with the term of use
            </Link>
          </Button>
        </Box>

        {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
        {/* <form method="post" onsubmit="return submitUserForm();">
          <div
            class="g-recaptcha"
            data-sitekey="6Lc5WYQfAAAAAFNWBSXRahFUMtMzxP9ROBGWFgI1"
            data-callback="verifyCaptcha"
          ></div>
          <div id="g-recaptcha-error"></div>
          <input type="submit" name="submit" value="Submit" />
        </form> */}
      </Box>
    </div>
  );
};

export default Page1;
