import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import Main from "./Main";
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Main />
    </Provider>
  </>,
  document.getElementById("container")
);
