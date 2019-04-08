import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {createStore} from "redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import reducer from "./reducer";
import store from "./store"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

document.getElementById('statenumber').onclick = function(){
    console.log('1111')
};

