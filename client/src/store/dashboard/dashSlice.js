import { createSlice } from '@reduxjs/toolkit';

export const dashSlice = createSlice({
    name: 'dash',
    initialState: {
    data:{},
    isLoading: false,
    offset:0,
    ml: {
      top:0,
      marginLeft: '2500px',
      transition: 'margin-left 0.5s ease',
    },
    isScrollLocked: false,
    pokemonCard:{},
    enableChat: false
    },
    reducers: {
       page: (state, { payload }) => {
          const { next, previous } = payload
          if (next=== 1){
            state.offset += 20 
          }
          else if (previous === 1 && state.offset >= 1){
            state.offset -= 20 
          }
       },
       isDataLoading: (state, { payload }) => {
        state.data = { ...payload };
        state.isLoading = false;
      },
       isWaitingData: ( state, { payload } ) => {
        if ( payload === true ) state.isLoading = true
       },
       isMenuZero:( state, { payload } ) => {
        state.ml = {
          top: payload.currentPosition,
          marginLeft:'0px',
          transition: 'margin-left 0.5s ease',
        };
        state.isScrollLocked = true;
        state.pokemonCard = payload.value;
        state.enableChat=false;
       },
       isMenuTransitions: ( state, { payload} ) =>{
        state.ml = { 
          top: payload.currentPosition,
          marginLeft:'2500px',
          transition: 'margin-left 0.5s ease',
        }
        state.isScrollLocked = false;
        state.enableChat=true

       },isResetData : ( state ) =>{
        state.data = {},
        state.isLoading = false,
        state.offset = 0,
        state.ml = {
          top:0,
          marginLeft: '2500px',
          transition: 'margin-left 0.5s ease',
        },
        state.isScrollLocked = false,
        state.pokemonCard = {},
        state.enableChat = false
       }
    }
});


export const { page, isDataLoading, isWaitingData, isMenuZero, isMenuTransitions,isResetData  } = dashSlice.actions;   