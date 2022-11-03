import  { createAction, createReducer } from '@reduxjs/toolkit'

// Action
export const isLogAction = createAction('isLogAction')

// Reducer 
export default createReducer(false, (builder) => {
    builder.addCase(isLogAction, (state) => !state)
})