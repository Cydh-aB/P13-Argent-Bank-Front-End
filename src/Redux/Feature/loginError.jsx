import  { createAction, createReducer } from '@reduxjs/toolkit'

// Initial State
const initialState = {
    data: false
}

// Action
export const loginErrorAction = createAction('loginErrorAction')

// Reducer 
export default createReducer(initialState, (builder) => {
    builder.addCase(loginErrorAction, (state, action) => {
        state.data = action.payload
    })
})