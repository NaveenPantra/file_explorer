import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import SideDrawer from "./components/sideDrawer/SideDrawer";
import Explorer from "./components/explorer/Explorer";
import store from "./redux/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <SideDrawer />
    <Explorer />
  </Provider>,
  document.getElementById("root")
);
