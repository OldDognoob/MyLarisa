import React from "react";
import { makeStyles } from "@material-ui/core/style";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: ``,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
    return(
      <div className={classes.root}>
        {/* <CssBaseline/> */}
        {/* <Header/> */}
        {/* <PlaceToVisit/> */}
      </div>
    );
}
