import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import messageReducer from './message.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
    loginReducer,
    messageReducer,
    authReducer
})