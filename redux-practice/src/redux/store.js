import {createStore} from "redux";
import reducer from "./reducer/reducer";

let store = createStore(reducer);
console.log("store? ", store);

export default store;