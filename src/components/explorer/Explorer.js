import React from "react";
import withStyles from "react-jss";
import ExplorerHeader from "./Header.explorer";
import ExplorerListing from "./Listing.explorer";

const styles = {
  root: {
    // padding: "2rem",
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
};

const Explorer = ({ classes }) => {
  return (
    <section className={classes.root}>
      <ExplorerHeader />
      <ExplorerListing />
    </section>
  );
};

export default withStyles(styles)(Explorer);
