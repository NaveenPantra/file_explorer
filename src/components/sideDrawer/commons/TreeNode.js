import React, { useState } from "react";
import withStyles from "react-jss";
import Tree from "./Tree";
import DropDownImage from "./../../../static/icons/dropDown.svg";
import { FOLDER } from "./../../../utils/constants";
import FileImage from "./../../../static/img/file.png";
import FolderImage from "./../../../static/img/folder.png";
import { connect } from "react-redux";
import { replacePath } from "./../../../redux/path/path.actions";

const styles = {
  root: {
    margin: "1rem 0",
    cursor: "pointer",
    padding: "1.4rem 1rem",
    fontSize: "1.4rem",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    "&:hover": {
      background: "var(--color-context-menu-option-bck)"
    },
    "& > span": {
      fontSize: "1.6rem",
      marginRight: "auto"
    }
  },
  thumbnail: {
    width: "1.3rem",
    height: "1.3rem",
    objectFit: "contain",
    marginRight: "1rem"
  },
  arrow: {
    transition: "all 0.3s",
    transformOrigin: "center"
  }
};

const TreeNode = ({ classes, content = {}, info, depth, replacePath }) => {
  const [isTreeOpen, setisTreeOpen] = useState(false);
  const handleClick = () => {
    // debugger;
    setisTreeOpen(!isTreeOpen);
    if (
      // Object.keys(content).length === 0
      content.children.length === 0 &&
      (!isTreeOpen || info.type !== FOLDER)
    ) {
      let { path } = info;
      // path = path.split("/");
      replacePath(path);
    }
  };
  // giving borderleft and marginBottom based on depth
  const borderLeft = depth > 0 ? "var(--tree-side-border)" : "none";
  const marginBottom =
    depth > 0 && isTreeOpen && info.type === FOLDER ? "1rem" : "0";
  // The TreeNode render Tree with depth + 1 for the margin on the leftside
  return (
    <>
      <div
        className={classes.root}
        onClick={handleClick}
        style={{ marginBottom, marginLeft: 10 * depth, borderLeft }}
      >
        <img
          className={classes.thumbnail}
          src={info.type === FOLDER ? FolderImage : FileImage}
          alt={info.type}
        />
        <span>{info.name}</span>
        {info.type === FOLDER ? (
          <img
            className={classes.arrow}
            src={DropDownImage}
            alt={"Drop Down"}
            style={{
              transform: `rotate(${isTreeOpen ? 180 : 0}deg)`
            }}
          />
        ) : null}
      </div>
      {info.type === FOLDER && isTreeOpen ? (
        //<Tree content={content} depth={depth + 1} />
        <Tree content={content.children} depth={depth + 1} />
      ) : null}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  replacePath: payload => dispatch(replacePath(payload))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(TreeNode));
