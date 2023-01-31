import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cardSlice'
import filterSlice from './slices/filterSlice'
import pizzaSlice from './slices/pizzaSlice'


export const store = configureStore({
  reducer: {
    filter: filterSlice,
    card: cardSlice,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<Appdispatch>