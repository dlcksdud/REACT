let initialState = {
    level:0
}

function reducer(state=initialState, action) {
    console.log("Action은 뭘까?", action);
    //{type: '@@redux/INITf.1.9.1.f.9'}type: "@@redux/INITf.1.9.1.f.9"[[Prototype]]: Object

    if(action.type === "INCREMENT") {
        return {
            // store는 reducer의 return값을 적용한다.
            // ...state인 이유 : (만약 state가 여러개이면) 다른 state값은 유지하되, count만 바꾼다는 의미
            // ...spread문법을 통해서 기존 객체 내용을 복사해 새로운 객체에 전달 가능
            ...state, level: state.level + 1
        };
    }
    // store는 return값 필수
    return {...state};
}

export default reducer;