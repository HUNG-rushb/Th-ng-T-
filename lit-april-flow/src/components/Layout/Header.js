import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import { createTheme } from "@mui/material/styles";
// import { indigo } from "@mui/material/colors";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: indigo[900],
//     },
//     secondary: {
//       main: "#f44336",
//     },
//   },
// });

const useStyles = makeStyles(() => ({
  bar: {
    fontFamily: "'Open Sans', cursive",
    // marginBottom: "5rem",
    height: "4rem",
  },

  container: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sub_container: {
    display: "flex",
    alignItems: "center",
  },

  title: { color: "inherit", marginRight: "2rem" },

  button: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.1rem",
    position: "flex-end",

    "&:hover": { color: "silver" },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.bar} color="primary" position="sticky">
        {/* <CssBaseline /> */}

        <Toolbar>
          <div className={classes.container}>
            <Typography variant="h6" className={classes.title}>
              FAMILIES USING TECHNOLOGY SURVEY
            </Typography>

            <div className={classes.sub_container}>
              <Link to="/page_3" className={classes.button}>
                I HAVE CHANGE MY MIND
              </Link>
              <ChevronRightIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
