import React from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import ArrowFilledUp from "./../../../../static/img/arrow_filled_up.png";
import { popPath } from "./../../../../redux/path/path.actions";

const styles = {
  root: {
    widht: "2.3rem",
    height: "2.3rem",
    cursor: "pointer",
    marginRight: "2rem"
  }
};

const PopperImage = ({ classes, currentPath, popPath }) => {
  const style = { opacity: currentPath.length > 1 ? 0.8 : 0.4 };
  // ON click on image the currentPath is popped in curretPath is at depth > 0
  const clickHandler = () => {
    if (currentPath.length > 1) {
      popPath();
    }
  };
  return (
    <img
      src={ArrowFilledUp}
      className={classes.root}
      style={style}
      onClick={clickHandler}
      alt={"arrowUp"}
    />
  );
};

const mapStateToProps = ({ currentPath }) => ({ currentPath });

const mapDispatchToProps = dispatch => ({
  popPath: () => dispatch(popPath())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PopperImage));
