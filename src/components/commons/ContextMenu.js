import React, { useEffect } from "react";
import withStyles from "react-jss";

const styles = {
  root: {
    position: "absolute",
    bottom: "-100%",
    left: "50%",
    border: "var(--modal-border)",
    boxShadow: "var(--modal-box-shadow)",
    display: "block",
    borderRadius: 8,
    width: "14rem",
    zIndex: 1,
    background: "var(--color-modal-background)"
  }
};

const ContextMenu = ({
  classes,
  children,
  open,
  onClose,
  customClassName = ""
}) => {
  const handleMouseDownOnDocument = event => {
    const { target } = event;
    // Finding where the click happened
    // in the contextMeny for out side
    if (target.closest(".contextMenu")) return null;
    // whileCLosing deregister and call onCLose();
    document.removeEventListener("mousedown", handleMouseDownOnDocument);
    onClose();
  };
  // ON didMount event listener is registered
  // On unMount event listener ins deregistered
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDownOnDocument);
    return () => {
      document.removeEventListener("mousedown", handleMouseDownOnDocument);
    };
  });
  // if open in false return null else render children
  if (!open) return null;
  return (
    <section className={`${classes.root} contextMenu ${customClassName}`}>
      {children}
    </section>
  );
};

export default withStyles(styles)(ContextMenu);
