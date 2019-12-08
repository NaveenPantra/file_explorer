import React from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import TreeNode from "./commons/TreeNode";
import { replacePath } from "./../../redux/path/path.actions";
import { INITIAL_CURRENT_PATH } from "./../../redux/initial.state";

const styles = {
  root: {
    background: "var(--color-side-drawer-background)",
    height: "85vh",
    width: "25%",
    overflow: "auto",
    padding: "2rem",
    borderRadius: 3
  },
  steathHeader: {
    fontSize: "2rem",
    fontWeight: 500,
    marginBottom: "2rem",
    color: "var(--color-side-drawer-header)",
    cursor: "pointer"
  }
};

const SideDrawer = ({ classes, explorer = {}, replacePath }) => {
  const {
    root: { content = {} }
  } = explorer;

  // The Tree view contain TreeNodes which contain Tree
  const treeNodes = Object.keys(content).map(name => (
    <TreeNode
      key={name}
      content={content[name].content}
      info={content[name].info}
      depth={0}
    />
  ));

  // Click on the root will reset the currentPath in redux
  // lead to /root dir
  const handleClick = () => {
    replacePath(INITIAL_CURRENT_PATH);
  };
  return (
    <section className={classes.root}>
      <h3 className={classes.steathHeader} onClick={handleClick}>
        Root
      </h3>
      <div>{treeNodes}</div>
    </section>
  );
};

const mapStateTopProps = ({ explorer }) => ({ explorer });

const mapDispatchToProps = dispatch => ({
  replacePath: payload => dispatch(replacePath(payload))
});

export default connect(
  mapStateTopProps,
  mapDispatchToProps
)(withStyles(styles)(SideDrawer));
