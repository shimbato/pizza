

import { RootState } from './../store';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { Pizza, PizzaSliceState, SearchPizzaParams, Status } from './types';



export const fetchPizza = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://6380bcab8efcfcedac0d9102.mockapi.io/item?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});


const initialState: PizzaSliceState  = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action:PayloadAction <Pizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchPizza.pending,(state, action)=>{
      state.status = Status.LOADING
      state.items = []
    } );
    builder.addCase(fetchPizza.fulfilled,(state, action)=>{
      state.status = Status.SUCCESS
      state.items = action.payload
    } );
    builder.addCase(fetchPizza.rejected,(state, action)=>{
      state.status = Status.ERROR
      state.items = []
    } );
  }
});

export const selectPizzaData= (state: RootState)=> state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
