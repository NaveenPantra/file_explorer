import React from "react";
import withStyles from "react-jss";
import TreeNode from "./TreeNode";
import { connect } from "react-redux";

const styles = {
  root: {
    // position: "absolute",
    // bottom: 0,
    // left: "10%"
  },
  emptyMsg: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    textAlign: "center"
  }
};

const Tree = ({ classes, content = {}, depth, searchData }) => {
  // const contentLength = Object.keys(content).length;
  // if there are contents return messsage
  if (
    // contentLength === 0
    content.length === 0
  ) {
    return (
      <div className={classes.emptyMsg} style={{ marginLeft: 10 * depth }}>
        Empty Folder, &nbsp;&nbsp;Add Files/Folders on Right Side
      </div>
    );
  }
  // else Tree render TreeNodes
  const treeNodes = Object.keys(content).map(name => (
    <TreeNode
      key={name}
      content={content[name].content}
      info={content[name].info}
      depth={depth}
    />
  ));
  const searchTreeNodes = content.map(child => (
    <TreeNode
      key={child}
      content={searchData[child]}
      info={searchData[child]}
      depth={depth}
    />
  ));
  return (
    <div className={classes.root}>
      {/* {treeNodes} */}
      {searchTreeNodes}
    </div>
  );
};

const mapStateToProps = ({ searchData }) => ({
  searchData
});

export default connect(mapStateToProps)(withStyles(styles)(Tree));
