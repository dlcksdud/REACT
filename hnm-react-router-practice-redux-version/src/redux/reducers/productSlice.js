import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    productList: [],
    isLoading: false,
    error: null
}

// function productReducer(state = initialState, action) {
//     let {type, payload} = action;
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {
//                 ...state,
//                 productList: payload.data
//             };
//         default:
//             return {...state};
//     }
// }

export const fetchProducts = createAsyncThunk(
    "product/fetchAll",
    async (searchQuery, thunkAPI) => {
        try {
            let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products?q=${searchQuery}`;
            const response = await axios.get(url);
            return response.data; // 데이터를 반환해야 reducer에서 받을 수 있음
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    // reducers: 동기적으로 자신의 state를 바꾸는 경우
    reducers: {
        // getAllProducts(state, action) {
        //     state.productList = action.payload.data;
        // }
    },
    // extraReducers : 바로 호출한 거는 아니지만 외부 api 등에 의해 호출된 extra한 reducer들
    // 직접적으로 호출하지 않고 createAsyncThunk 통해서 호출할거기 때문
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                // 일반적으로 pending 상태에서는 로딩스피너
                state.isLoading = true;
                
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productList = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                // 실패 케이스
                state.isLoading = false;
                state.error = action.payload;

            })
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;