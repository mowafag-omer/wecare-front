import { action } from '../types/type'
const initialState = {
    message: ""
}

const messageReducer = ( state = initialState, action: action) => {
    switch ( action.type ) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login: true
            } 
        case 'LOGIN_FAIL':
            return {
                ...state,
                login: false
            }
        default:
            return state;
    }
}

export default messageReducer