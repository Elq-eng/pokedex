import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      status: 'not-authenticated',
      user:{},
      errorMessage: undefined
    },
    reducers: {
       onChecking: (state, /* action */ ) => {
        state.status = 'checking',
        state.user = {},
        state.errorMessage = undefined
       },
       onLogin: ( state, { payload }) => {
        state.status = 'authenticated',
        state.user = payload,
        state.errorMessage = undefined
       },
       onLoginUserFailure:( state, { payload } ) => {
        state.status = 'not-authenticated',
        state.user = {},
        state.errorMessage = payload.msg
       },
       onResetMsg:( state, ) => {
        state.status = 'not-authenticated',
        state.user = {},
        state.errorMessage = undefined
       }
    }
});


export const { onChecking, onLogin,onLoginUserFailure,onResetMsg } = authSlice.actions;