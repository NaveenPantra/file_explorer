import React from "react";
import withStyles from "react-jss";
import PopperImage from "./commons/header/popper.image";
import BreadCrumb from "./commons/header/BreadCrumb.header";
import SearchHeader from "./commons/header/Search.header";

const styles = {
  root: {
    padding: "2rem",
    display: "flex",
    alignItems: "center"
  }
};

const ExplorerHeader = ({ classes }) => {
  return (
    <section className={classes.root}>
      <PopperImage />
      <BreadCrumb />
      <SearchHeader />
    </section>
  );
};

export default withStyles(styles)(ExplorerHeader);
