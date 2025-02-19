import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    productList: [],
    isLoading: false
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

const getProducts = createAsyncThunk(
            'product/fetchAll', 
            (searchQuery, thunkAPI)=> {
                let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products?q=${searchQuery}`;
                axios.get(url)
                    .then((res)=> {
                        console.log(res.data);
                        // setProductList(res.data);
                        // dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data: res.data}})
                        return res.data;
                    })
                    .catch((err)=>{
                        // console.log(err);
                        thunkAPI.rejectWithValue(err);
                    })
            }
)

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
            .addCase(getProducts.pending, (state) => {
                // 일반적으로 pending 상태에서는 로딩스피너
                state.isLoading = true;
                
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productList = action.payload;
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, (state) => {
                // 실패 케이스
                state.isLoading = false;
            })
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;