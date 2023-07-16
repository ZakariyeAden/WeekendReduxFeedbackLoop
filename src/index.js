import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducers
const feeling = (state = 0, action) => {
   if(action.type === 'ADD_FEELING'){
       return action.payload;
   }
    return state;
}
const support = (state = 0, action) => {
    if(action.type === 'ADD_SUPPORT'){
        return action.payload;
    }
     return state;
 }
 const comment = (state = '', action) => {
    if(action.type === 'ADD_COMMENT'){
        return action.payload;
    }
     return state;
 }
 const understanding = (state = 0, action) => {
    if(action.type === 'ADD_UNDERSTANDING'){
        return action.payload;
    }
     return state;
 }
 const reset = (state = [], action) => {
     if (action.type === "THANKYOU") {
        return feeling(undefined, action) && support(undefined, action) && comment(undefined, action) && understanding(undefined, action);
      } 
      return state;
 }

// Store, The store is the big JavaScript Object that holds all of the information for our application
const store = createStore(
    combineReducers({
        feeling,
        support,
        comment,
        understanding,
        reset
    }),
    applyMiddleware(logger)
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
