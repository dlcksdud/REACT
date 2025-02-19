import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./reducers/authenticateReducer";
import productDetailReducer from "./reducers/productDetailReducer";
import productReducer from "./reducers/productSlice";

// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
    reducer: {
        auth : authenticateReducer,
        product : productReducer,
        productDetail : productDetailReducer,
    }
})

export default store;