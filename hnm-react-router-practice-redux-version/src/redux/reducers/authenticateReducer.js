
let initialState = {
    id: '',
    pw: '',
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case "LOGIN_SUCCESS":
            console.log("로그인 썩세스");
            return {
                ...state,
                id: payload.id,
                pw: payload.pw,
                authenticate: true,
            };
        case "LOGOUT_SUCCESS":
            console.log("로그아웃 썩세스");
            return {
                ...state,
                authenticate: false
            }
        default: return {...state}
    }
}

export default authenticateReducer;