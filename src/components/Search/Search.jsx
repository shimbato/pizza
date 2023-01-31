import React, { useCallback, useRef, useState } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce'

export const Search = () => {
  const { root, search, input, clearIcon } = styles;

  const [searchInput, setSearchInput] = useState('');
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
   
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str)=>{
        setSearchInput(str)
    }, 150),
   
    []
  )
//   console.log(str)

  const onChangeInput =(e)=>{
    setValue(e.target.value);
    updateSearchValue(e.target.value)
  }
  return (
    <div className={root}>
      <svg
        className={search}
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
      </svg>
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск пиццы..."
        className={input}
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={clearIcon}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )} 
    </div>
  );
};
