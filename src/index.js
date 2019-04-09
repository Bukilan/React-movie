import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./components/registerServiceWorker";

import store from "./ConfigureStore";

console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

// document.getElementById('statenumber').onclick = function(){
//     console.log('1111')
// };

