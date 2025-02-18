import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    level:0,
    id: "",
    pw: ""
}

// function reducer(state=initialState, action) {
//     console.log("Action은 뭘까?", action);
//     //{type: 'INCREMENT'}

//     // if문, switch문 등 회사에 따라 사용방법은 다름.
//     /**
//      * switch 문으로 변경시
//      */
//     switch (action.type) {
//         case "INCREMENT":
//             return {...state, level: state.level + 1};
//         case "LOGIN":
//             return {
//                 ...state, 
//                 id:action.payload.id, 
//                 pw:action.payload.pw
//                 };
//         case "DECREMENT":
//             return {...state, level: state.level - action.payload.num};
//         default:
//             // store는 return값 필수
//             return {...state};

//     }
    
//     // store는 return값 필수
//     // return {...state};
// }

// export default reducer;

// redux-toolkit 이용
const basicSlice = createSlice({
    name: "basic",
    initialState,
    reducers: {
        // reducers는 객체를 받고, 그 객체는 함수로 이루어져 있다.
        // 그 함수는 두 개의 매개변수를 갖는다.
        increment(state, action) {
            // 리턴 없음
            state.level = state.level + 1;
        }
        ,login(state, action) {
            state.id = action.payload.id;
            state.pw = action.payload.pw;
        }
    }
})

console.log("basic slice : " + basicSlice);

export const basicActions = basicSlice.actions;
export default basicSlice.reducer;