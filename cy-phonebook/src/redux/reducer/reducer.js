let initialState = {
    name: "",
    phoneNumber: "",
    searchItem: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SAVEITEM":
            return {
                ...state,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber
            };
        case "SEARCHITEM":
            return {
                ...state,
                searchItem: action.payload
            };
        default:
            return {...state};
    }
}

export default reducer;