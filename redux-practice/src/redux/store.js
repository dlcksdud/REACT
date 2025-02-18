import {createStore} from "redux";
import reducer from "./reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

//let store = createStore(reducer);

const store = configureStore({
    reducer: {
        // combinreducer에서 해주는 것과 같이 넣어줌
        // auth :authenticate
        // product: productReducer

    }
})
export default store;