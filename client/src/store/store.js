import {configureStore} from '@reduxjs/toolkit';
import { authSlice,dashSlice,pokemonSlice } from './'


const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};

const store = configureStore({
  reducer: {
    pokeCapture : pokemonSlice.reducer,
    auth : authSlice.reducer, 
    dash: dashSlice.reducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;