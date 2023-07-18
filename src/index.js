import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

let defaultState = {
  feeling: "",
  comment: "",
  understanding: "",
  support: "",
};
// Reducers
const feedback = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_FEELING": {
      return {...state, feeling:action.payload};
    }
    case "GET_SUPPORT": {
      return {...state, support:action.payload};
    }
    case "GET_UNDERSTANDING": {
      return {...state, understanding:action.payload};
    }
    case "GET_COMMENT": {
      return {...state, comment:action.payload};
    }
    case "THANK_YOU": {
        return '';
      }
    default:
      return state;
  }
};

// Store, The store is the big JavaScript Object that holds all of the information for our application
const store = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
