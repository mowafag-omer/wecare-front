import { user } from "../types"


export const login = (user : user) =>{
    return {
        type : "LOGIN",
        payload : user
    }
}
export const logout = (user : user) =>{
    return {
        type : "LOGOUT",
        payload : false
    }
}

