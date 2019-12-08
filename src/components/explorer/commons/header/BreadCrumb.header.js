import React from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import Crumb from "./Crumb.header";

const styles = {
  root: {
    marginRight: "auto"
  }
};

const BreadCrumb = ({ classes, currentPath }) => {
  // Breadcrumb has current Path which render crumbs
  const crumbs = currentPath.map(path => <Crumb key={path} path={path} />);
  return <div className={classes.root}>{crumbs}</div>;
  // return <div className={classes.root}>{crumbs}</div>;
};

const mapStateToProps = ({ currentPath }) => ({
  currentPath
});

export default connect(mapStateToProps)(withStyles(styles)(BreadCrumb));
