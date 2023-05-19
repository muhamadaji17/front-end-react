import ActionType from "../action/actionType";

const initialState = {
    user: [],
    message: '',
    refresh: ''
}


function userReducer(state = initialState, action) {
    const {type, payload} = action
    // console.log(payload)
    switch (type) {
        case ActionType.GET_USER:
            return {state, user: payload, refresh: true};
        case ActionType.UPDATE_USER:
            return {user: payload, refresh: false};
        case ActionType.DEL_USER:
            return {user: payload, refresh:false};
        default:
            return state
    }
}


export default userReducer