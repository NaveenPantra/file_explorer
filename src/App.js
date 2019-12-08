import React, { Component } from "react";
import { connect } from "react-redux";
import { createObject, deleteObject } from "./redux/object/object.actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { step: -1 };
  }
  handleCreateObject = () => {
    const { createObject } = this.props;
    this.setState(
      prevState => ({
        step: prevState.step + 1
      }),
      () => {
        const { step } = this.state;
        createObject({
          path: ["root"],
          info: {},
          name: `naveen-${step}`,
          content: {}
        });
      }
    );
  };

  handleDeleteObject = () => {
    const { deleteObject } = this.props;
    const { step } = this.state;
    if (step > -1) {
      this.setState(
        prevState => ({ step: prevState.step - 1 }),
        () => {
          deleteObject({ path: ["root"], name: `naveen-${step}` });
        }
      );
    }
  };

  render() {
    return [
      <button onClick={this.handleCreateObject} key="1">
        Create
      </button>,
      <button onClick={this.handleDeleteObject} key="2">
        Delete
      </button>
    ];
  }
}

const mapStateToProps = ({ explorer }) => {
  return { explorer };
};

const mapDispatchToProps = dispatch => ({
  createObject: payload => dispatch(createObject(payload)),
  deleteObject: payload => dispatch(deleteObject(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
