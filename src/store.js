import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
