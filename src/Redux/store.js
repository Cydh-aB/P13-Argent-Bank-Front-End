import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../Feature/loginSlice'

export const store = configureStore({
    reducer:{
        login: loginReducer,
    }
})