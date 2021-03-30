import React from "react";
//@material ui-core (style)
import { makeStyles } from "@material-ui/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorTitleText: {
    color: "#850821",
  },
  container:{
      textAlign:"center",
  },
  title:{
      color: "#fff",
      fontSize:"4.5rem",
  },
  goDownIcon:{
      color:"#850821",
      fontSize:"4rem",
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorTitleText}>Town.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br /> 
          My<span className={classes.colorTitleText}>Town.</span>
        </h1>
        <IconButton>
            <ExpandMoreIcon className={classes.goDownIcon}/>
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
