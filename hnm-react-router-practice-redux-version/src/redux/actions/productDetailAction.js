import axios from "axios";

function getProductDetail(id) {
    return (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products/${id}`;
        axios.get(url)
            .then((res) =>{
                console.log("!!!!!! ", res.data);
                
                // setProduct(res.data);
                dispatch({type: "GET_PRODUCT_DETAIL", payload: {data: res.data}});
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const productDetailAction={getProductDetail}