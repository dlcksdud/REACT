let initialState = {
    name: "",
    phoneNumber: "",
    searchItem: "",
    contactList: [] // 선생님꺼
}

function reducer(state = initialState, action) {
    // 아래와 같이 Destructuring 하면 action. 안적어도 됨
    const {type, payload} = action

    switch (type) {
        case "SAVEITEM":
            return {
                ...state,
                name: payload.name,
                phoneNumber: payload.phoneNumber
            };
        case "SEARCHITEM":
            return {
                ...state,
                searchItem: payload,
            };
        case "ADD_CONTACT": // 선생님꺼
            return {
                ...state,
                contactList: [...state.contactList, {name: payload.name, phoneNumber: payload.phoneNumber}]
            } 
        default:
            return {...state};
    }
}

export default reducer;