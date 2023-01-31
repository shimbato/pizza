import React from 'react';
import style from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={style.root}>
    <h1 >
      <span>😕</span>
      <br/>
      Такой страницы не существует
    </h1>
    <p className={style.description}>
    К сожалению данная страница отсутствует в нашем интернет-магазине
    </p>
    </div>
  )

};
