import React from "react";
import withStyles from "react-jss";
import TreeNode from "./TreeNode";

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

const Tree = ({ classes, content = {}, depth }) => {
  const contentLength = Object.keys(content).length;
  // if there are contents return messsage
  if (contentLength === 0) {
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
  return <div className={classes.root}>{treeNodes}</div>;
};

export default withStyles(styles)(Tree);
