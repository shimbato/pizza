import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';





const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'Популярности',
    sortProperty: SortPropertyEnum.PRICE_DES,
  },
  currentPage: 1,
  open: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction <number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction <Sort>) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction <number>) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action:  PayloadAction <string>) => {
        state.searchValue = action.payload;
      },
    setOpen: (state, action) => {
        state.open = action.payload;
    },
    setFilters: (state, action:  PayloadAction <FilterSliceState>) => {
      if(Object.keys(action.payload).length){
        state.currentPage = Number(action.payload.currentPage);
        state.categoryId = Number(action.payload.categoryId);
        state.sort = action.payload.sort
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort ={
          name: 'Популярности',
          sortProperty: SortPropertyEnum.RAITING_DES
          
        }
      }
    }

  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setCurrentPage, setSearchValue, setOpen} = filterSlice.actions;

export default filterSlice.reducer;
