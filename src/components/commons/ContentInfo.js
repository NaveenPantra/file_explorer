import React from "react";
import withStyles from "react-jss";
import CloseIcon from "./../../static/icons/close.svg";
import FileImage from "./../../static/img/file.png";
import FolderImage from "./../../static/img/folder.png";
import { FILE, CONTENT_INFO_SEQ } from "./../../utils/constants";

const styles = {
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "2.5rem",
    border: "var(--modal-border)",
    borderRadius: 8,
    background: "var(--color-modal-background)",
    width: "35rem",
    boxShadow: "var(--modal-box-shadow)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingBottom: "3.4rem",
    "& h3": {
      color: "var(--color-side-drawer-text)",
      fontWeight: 500,
      fontSize: "1.8rem",
      textTransform: "capitalize"
    },
    "& img": {
      width: "2.6rem",
      height: "2.6rem",
      objectFit: "contain",
      position: "absolute",
      right: 0,
      cursor: "pointer"
    }
  },
  thumbnail: {
    paddingBottom: "2.5rem",
    width: "9rem",
    height: "9rem",
    objectFit: "contain",
    display: "block",
    margin: "0 auto"
  },
  details: {
    paddingBottom: "1.6rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "var(--color-brackcrumb-inactive)",
    "& span:first-child": {
      flexBasis: "45%",
      textAlign: "right",
      color: "var(--color-side-drawer-text)",
      textTransform: "capitalize"
    }
  }
};

const ContentInfo = ({ classes, info, onClose }) => {
  // Picking up Image
  const thumbnail = info.type === FILE ? FileImage : FolderImage;
  // The details are shown as per the CONTENT_INFO_SEQ in constats.js
  const details = CONTENT_INFO_SEQ.map(infoName => {
    return (
      <p className={classes.details}>
        <span>{infoName}</span>:&nbsp;&nbsp;<span>{info[infoName]}</span>
      </p>
    );
  });
  return (
    <section className={classes.root}>
      <div className={classes.header}>
        <h3>{info.type} Info</h3>
        <img
          src={CloseIcon}
          alt={"Close"}
          className={classes.closeIcon}
          onClick={onClose}
        />
      </div>
      <img src={thumbnail} alt={"File/Folder"} className={classes.thumbnail} />
      {details}
    </section>
  );
};

export default withStyles(styles)(ContentInfo);
