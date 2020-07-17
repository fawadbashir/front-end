import { createContext } from 'react'

export const AuthContext = createContext({
    // isLoggedIn: false,
    token : '',
    userId : '',
    userType: '',
    login: () => { },
    logout: () => { }
})