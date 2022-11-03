import { configureStore } from "@reduxjs/toolkit";
import isLogReducer from './Feature/isLog'
import loginErrorReducer from './Feature/loginError'
import profilDataReducer from './Feature/profilData'

const store = configureStore({
    reducer: {
        isLog: isLogReducer,
        loginError: loginErrorReducer,
        profilData: profilDataReducer
    }
})

export default store