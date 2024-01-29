import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
    userID: {
      uid: '',
      pokemons:[],
      },
    alert: false

    },
    reducers: {
       isSavingPokemon: (state, { payload } ) => {
          state.userID.uid = payload.uid ;
          state.userID.pokemons = [payload.pokemons];
          state.alert = payload.alertMsg
       },
       isChangeAlert: ( state ) => {
         state.alert = ''
       },
       isResetDataPoke: ( state ) => {
        state.userID = {
          uid: '',
          pokemons:[],
          },
        state.alert = false
       }
    }
});


export const { isSavingPokemon, isChangeAlert, isResetDataPoke } = pokemonSlice.actions;