let initialState = {
    level:0,
    id: "",
    pw: ""
}

function reducer(state=initialState, action) {
    console.log("Action은 뭘까?", action);
    //{type: 'INCREMENT'}

    // if문, switch문 등 회사에 따라 사용방법은 다름.
    // if(action.type === "INCREMENT") {
    //     return {
    //         // store는 reducer의 return값을 적용한다.
    //         // ...state인 이유 : (만약 state가 여러개이면) 다른 state값은 유지하되, count만 바꾼다는 의미
    //         // ...spread문법을 통해서 기존 객체 내용을 복사해 새로운 객체에 전달 가능
    //         // ...state, level: state.level + 1
    //         ...state, level: state.level + action.payload.num
    //     };
    // }

    /**
     * switch 문으로 변경시
     */
    switch (action.type) {
        case "INCREMENT":
            return {...state, level: state.level + 1};
        case "LOGIN":
            return {
                ...state, 
                id:action.payload.id, 
                pw:action.payload.pw
                };
        case "DECREMENT":
            return {...state, level: state.level - action.payload.num};
        default:
            // store는 return값 필수
            return {...state};

    }
    
    // store는 return값 필수
    // return {...state};
}

export default reducer;