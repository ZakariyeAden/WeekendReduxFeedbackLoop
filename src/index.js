import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducers
const feedback = (state = [], action) => {
    if(action.type === 'GET_FEEDBACK'){
        return [...state, action.payload];
    }
    return state;
}


// Store, The store is the big JavaScript Object that holds all of the information for our application
const store = createStore(
    combineReducers({
        feedback
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
