import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import {applyMiddleware, createStore} from "redux";
import rootReducer  from "./redux/reducer/index";
import thunk from "redux-thunk";
import logger from "redux-logger"


const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

