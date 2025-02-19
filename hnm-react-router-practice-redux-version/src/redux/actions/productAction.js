import axios from "axios";

// function getProducts(searchQuery) {
//     return (dispatch, getState) => {
        
//         let url = `https://my-json-server.typicode.com/dlcksdud/REACT/products?q=${searchQuery}`;
//         axios.get(url)
//             .then((res)=> {
//                 console.log(res.data);
//                 // setProductList(res.data);
//                 dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data: res.data}})
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//     }
// }

// export const productAction={getProducts}