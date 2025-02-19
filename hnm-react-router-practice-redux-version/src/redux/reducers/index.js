import { combineReducers } from "redux";
// 합치고 싶은 reducer 들고옴
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productSlice";
import productDetailReducer from "./productDetailReducer";

export default combineReducers({
    auth : authenticateReducer,
    product : productReducer,
    productDetail : productDetailReducer,
});