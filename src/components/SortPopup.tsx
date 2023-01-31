import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  setOpen, setSort } from '../redux/slices/filterSlice';
import { Sort, SortPropertyEnum } from '../redux/slices/types';

export const list: SortItem[] = [
  { name: 'Популярности Desc', sortProperty: SortPropertyEnum.RAITING_DES },
  { name: 'Популярности Asc', sortProperty: SortPropertyEnum.RAITING_ASC},
  { name: 'цене Desc', sortProperty: SortPropertyEnum.PRICE_DES },
  { name: 'цене Asc', sortProperty: SortPropertyEnum.PRICE_DES },
  { name: 'алфавиту Desc', sortProperty: SortPropertyEnum.TITLE_DES },
  { name: 'алфавиту Asc', sortProperty: SortPropertyEnum.TITLE_ASC },
];

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum ;
}

export type SortPopupValue =  {
  value: Sort;
}
export const SortPopup: React.FC<SortPopupValue> = React.memo(
  ({value}) => {
    const disaptch = useDispatch();
    // const { sort, open } = useSelector(selectFilter);
  
    const sortRef = useRef<HTMLDivElement>(null);
  
    const handleClickListItem = (obj) => {
      disaptch(setSort(obj)); // выбери какой-то пункт(из листа )
      disaptch(setOpen(false)); // потом скройся
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.path.includes(sortRef.current)) {
          disaptch(setOpen(false));
          console.log('Click outside');
        }
      };
      document.body.addEventListener('click', handleClickOutside);
  
      return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);
  
    return (
      <div className="sort" ref={sortRef}>
        <div className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={() => disaptch(setOpen(!open))}>{value.name}</span>
        </div>
        {open() && ( // если хотим чтоб вернуло  это
          <div className="sort__popup">
            <ul>
              {list.map((obj, i) => (
                <li
                  onClick={() => handleClickListItem(obj)}
                  className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                  key={i}>
                  {obj.name}
                </li> 
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
)