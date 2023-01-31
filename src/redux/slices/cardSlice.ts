import { GetCardLocal } from './../../components/utils/GetCardLocal';
import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../components/utils/CalcTotalPrice';
import { CardSliceState, CardItem } from './types';


const {items, totalPrice} = GetCardLocal();

const initialState: CardSliceState = {
  totalPrice,
  items,
};

const cardSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction <CardItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      
      }
   
      state.totalPrice = calcTotalPrice(state.items);

    },
    minusItem: (state, action: PayloadAction <string>) => {
        const findItem = state.items.find((obj) => obj.id === action.payload); 
        if (findItem) {
            findItem.count--;
        } 
      
        state.totalPrice = calcTotalPrice(state.items);
        
    },
    removeItem: (state, action: PayloadAction <string>) => {
      state.items = state.items.filter((obj) => obj.id!==action.payload);
    
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItem: (state) => {
      state.items = [];
      state.totalPrice = 0
    },
  },
});

export const selectCard = (state: RootState) => state.card;
export const selectCardItemById = (id: string) => (state: RootState) =>
  state.card.items.find((obj)=> obj.id === id)

export const { addItem, removeItem, clearItem, minusItem } = cardSlice.actions;

export default cardSlice.reducer;
