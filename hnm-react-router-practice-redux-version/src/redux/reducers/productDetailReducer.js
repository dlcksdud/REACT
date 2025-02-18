let initialState = {
    product: null
}

function productDetailReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case "GET_PRODUCT_DETAIL":
            console.log("get productDetail reducer");
            console.log(payload.data);
            return {
                ...state,
                product: payload.data
            };
        default: return {...state};
    }
}

export default productDetailReducer;