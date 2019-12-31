import React, { Component } from "react";
import withStyles from "react-jss";
import { connect } from "react-redux";
import CloseIcon from "./../../static/icons/close.svg";
import InputField from "./InputField";
import Toggler from "./../commons/Toggller";
import { FILE, FOLDER } from "./../../utils/constants";
import {
  validateFileName,
  validateName,
  validateNumber,
  validateDate,
  checkForValidObject,
  getFormatedCreatedDate
} from "./../../utils/helpers";
import { createObject } from "./../../redux/object/object.actions";
import { addSearchObject } from "./../../redux/search/search.actions";

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
    width: "40rem",
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
  togglerWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
    "& span": {
      padding: "1.2rem",
      fontSize: "1.3rem",
      cursor: "pointer",
      border: "var(--input-border)",
      width: "7rem",
      textAlign: "center",
      textTransform: "capitalize"
    },
    "& span:first-child": {
      borderRight: "none",
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8
    },
    "& span:last-child": {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8
    }
  },
  btn: {
    padding: "1.5rem",
    fontSize: "1.5rem",
    borderRadius: 8,
    background: "var(--color-blue-background)",
    color: "var(--color-modal-background)",
    outline: "none"
  }
};

class FileFolderAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: FILE,
      name: "",
      nameError: false,
      size: "",
      sizeError: false,
      creatorName: "",
      creatorNameError: false,
      createdDate: "",
      createdDateError: false
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const {
      currentPath,
      createObject,
      onClose,
      addSearchObject,
      contents
    } = this.props;
    let {
      type,
      name,
      nameError,
      creatorName,
      creatorNameError,
      size,
      sizeError,
      createdDate,
      createdDateError
    } = this.state;
    // validating checks
    nameError = type === FILE ? validateFileName(name) : validateName(name);
    nameError =
      nameError || checkForValidObject(contents, `${currentPath}/${name}`);
    sizeError = validateNumber(size);
    creatorNameError = validateName(creatorName);
    createdDateError = createdDate.length === 0 || validateDate(createdDate);
    // check for the errors and update the state
    if (!nameError && !sizeError && !creatorNameError && !createdDateError) {
      this.setState(
        {
          nameError,
          sizeError,
          creatorNameError,
          createdDateError
        },
        () => {
          // add the object to search and explorer state and close it.
          // createObject({
          //   path: currentPath,
          //   name,
          //   info: {
          //     name,
          //     size: `${size}Kb`,
          //     type,
          //     "creator name": creatorName,
          //     "created date": getFormatedCreatedDate(createdDate),
          //     path: currentPath.join("/")
          //   },
          //   content: {}
          // });
          const fullPath = `${currentPath.join("/")}/${name}`;
          if (type === FOLDER) currentPath.push(name);
          const info = {
            type,
            name,
            size: `${size}Kb`,
            "creator name": creatorName,
            "created date": getFormatedCreatedDate(createdDate),
            path: currentPath,
            children: []
          };
          addSearchObject({ fullPath, info });
          onClose();
        }
      );
    } else {
      this.setState({
        nameError,
        sizeError,
        creatorNameError,
        createdDateError
      });
    }
  };

  // for input elements
  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // For toggler
  handleChangeType = value => {
    this.setState({ type: value });
  };

  render() {
    const {
      type,
      name,
      nameError,
      creatorName,
      creatorNameError,
      size,
      sizeError,
      createdDate,
      createdDateError
    } = this.state;
    const { classes, onClose } = this.props;
    return (
      <form
        method="POST"
        className={classes.root}
        onSubmit={this.handleOnSubmit}
      >
        <div className={classes.header}>
          <h3>Create New</h3>
          <img
            src={CloseIcon}
            alt={"Close"}
            className={classes.closeIcon}
            onClick={onClose}
          />
        </div>
        <div className={classes.togglerWrapper}>
          <Toggler
            onClickHandler={this.handleChangeType}
            type={FILE}
            chosenType={type}
          />
          <Toggler
            onClickHandler={this.handleChangeType}
            type={FOLDER}
            chosenType={type}
          />
        </div>
        <InputField
          value={name}
          name="name"
          onChange={this.handleOnChange}
          placeholder={"Name"}
          label={"Name"}
          error={nameError}
          type={"text"}
          errorMessage={"Enter Valid Name"}
        />
        <InputField
          value={size}
          name="size"
          onChange={this.handleOnChange}
          placeholder={"Size in KB"}
          label={"Size"}
          error={sizeError}
          type={"number"}
          errorMessage={"Enter Valid Size"}
        />
        <InputField
          value={creatorName}
          name="creatorName"
          onChange={this.handleOnChange}
          placeholder={"Creator Name"}
          label={"Creator Name"}
          error={creatorNameError}
          type={"text"}
          errorMessage={"Enter Valid Name"}
        />
        <InputField
          value={createdDate}
          name="createdDate"
          onChange={this.handleOnChange}
          placeholder={"Created Date"}
          label={"Created Date"}
          error={createdDateError}
          type={"date"}
          errorMessage={"Enter Valid Date"}
        />
        <button className={classes.btn}>Create</button>
      </form>
    );
  }
}

const mapStateToProps = ({ currentPath }) => ({
  currentPath
});

const mapDispatchToProps = dispatch => ({
  createObject: payload => dispatch(createObject(payload)),
  addSearchObject: payload => dispatch(addSearchObject(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FileFolderAddForm));
