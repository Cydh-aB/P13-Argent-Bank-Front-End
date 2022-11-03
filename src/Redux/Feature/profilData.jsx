import  { createAction, createReducer } from '@reduxjs/toolkit'

// State initial
const initialState = {
    data: null
}

// Action 
export const profilDataAction = createAction('profilDataAction')

export default createReducer(initialState, (builder) => {
    builder.addCase(profilDataAction, (state, action) => {
        state.data = action.payload
    })
})