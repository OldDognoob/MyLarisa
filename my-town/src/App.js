import React from "react";
//@material ui-core (style)
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline} from '@material-ui/core';
// Components folder
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/larisa2.jpg'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
    return(
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <PlaceToVisit/>
      </div>
    );
}
