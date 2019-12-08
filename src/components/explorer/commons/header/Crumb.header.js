import React from "react";
import withStyles from "react-jss";
import { CRUMB_SEPARATOR } from "./../../../../utils/constants";

const styles = {
  root: {
    fontSize: "2rem",
    fontWeight: 500,
    paddingRight: "1rem",
    transform: "translateY(-2px)",
    color: "var(--color-brackcrumb-inactive)",

    "&:not(:last-child)::after": {
      content: "attr(data-separator)",
      paddingLeft: "1rem",
      color: "var(--color-brackcrumb-inactive)"
    },

    "&:last-child": {
      color: "var(--color-breadcrumb-active)",
      marginRight: "auto"
    }
  }
};

const Crumb = ({ classes, path }) => {
  return (
    <span className={classes.root} data-separator={CRUMB_SEPARATOR}>
      {path}
    </span>
  );
};

export default withStyles(styles)(Crumb);
