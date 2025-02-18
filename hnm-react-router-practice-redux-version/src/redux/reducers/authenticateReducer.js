
let initialState = {
    id: '',
    pw: '',
    authenticate: false
}

function authenticateReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                id: payload.id,
                pw: payload.pw,
                authenticate: true
            }
        default: return {...state}
    }
}

export default authenticateReducer;