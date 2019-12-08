import React from "react";

const Toggler = ({ onClickHandler, type = "", chosenType = "" }) => {
  // settinnUp color of activated toggler
  const style = {
    background:
      type === chosenType ? "var(--color-blue-background)" : "inherit",
    color: type === chosenType ? "var(--color-modal-background)" : "inherit"
  };
  return (
    <span
      onClick={() => {
        onClickHandler(type);
      }}
      style={style}
    >
      {type}
    </span>
  );
};

export default Toggler;
