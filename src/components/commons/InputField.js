import React from "react";
import withStyles from "react-jss";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2rem"
  },
  label: {
    fontSize: "1rem",
    padding: "0 0 5px 2px",
    color: "var(--color-brackcrumb-inactive)"
  },
  errorMessage: {
    fontSize: "1rem",
    padding: "3px 0 0 1.3rem",
    color: "var(--color-delete)"
  },
  input: {
    border: "var(--input-border)",
    padding: "1.2rem",
    fontSize: "1.6rem",
    outline: "none",
    borderRadius: 8,
    color: "var(--color-content-name)",
    "&::placeholder": {
      color: "var(--color-input-placeholder)"
    }
  }
};

const InputField = ({
  classes,
  value = "",
  name = "",
  onChange,
  placeholder = "",
  label = null,
  labelFor = "",
  inputID = null,
  error = false,
  errorMessage = "",
  type = "text"
}) => {
  // if lable is not null label tag is used
  const labelTag = label ? (
    <label htmlFor={labelFor} className={classes.label}>
      {label}
    </label>
  ) : null;
  // if there error
  const errorTag = error ? (
    <span className={classes.errorMessage}>{errorMessage}</span>
  ) : null;
  return (
    <div className={classes.root}>
      {labelTag}
      <input
        type={type}
        id={inputID}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={classes.input}
      />
      {errorTag}
    </div>
  );
};

export default withStyles(styles)(InputField);
