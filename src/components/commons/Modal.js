import React from "react";
import ReactDOM from "react-dom";
import withStyles from "react-jss";

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "block",
    height: "100vh",
    width: "100vw",
    background: "var(--color-modal-overlay)"
  }
};

const bodyElement = document.querySelector("body");

const Modal = ({
  classes,
  open = false,
  onClose = () => {},
  children = null
}) => {
  if (!open) return null;
  // Portal to join it to body.
  // Click on the overlay will close the modal
  return ReactDOM.createPortal(
    <>
      <div className={classes.overlay} onClick={onClose}></div>
      {children}
    </>,
    bodyElement
  );
};

export default withStyles(styles)(Modal);
