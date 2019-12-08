import React from "react";
import withStyles from "react-jss";
import FileImage from "./../../../../static/img/file.png";
import FolderImage from "./../../../../static/img/folder.png";
import { FILE } from "./../../../../utils/constants";
import { connect } from "react-redux";
import { replacePath } from "./../../../../redux/path/path.actions";

const styles = {
  root: {
    cursor: "pointer",
    padding: "1.4rem 1rem",
    display: "flex",
    "&:hover": {
      background: "var(--color-context-menu-option-bck)"
    }
  },
  thumbnail: {
    width: "3rem",
    height: "3rem",
    objectFit: "contain",
    marginRight: "1.4rem"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "& p:first-child": {
      fontSize: "1.4rem",
      transfomr: "translateY(-2px)"
    },
    "& p:last-child": {
      fontSize: "1rem"
    }
  }
};

const SearchResultListTile = ({
  classes,
  info = {},
  fullPath = "",
  replacePath
}) => {
  const { type, name, path } = info;
  const thumbnailImage = type === FILE ? FileImage : FolderImage;
  // Onclick replacing currentPath in redux
  return (
    <div className={classes.root} onClick={() => replacePath(path)}>
      <img src={thumbnailImage} alt={type} className={classes.thumbnail} />
      <div className={classes.info}>
        <p>{name}</p>
        <p>{fullPath}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  replacePath: payload => dispatch(replacePath(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SearchResultListTile));
