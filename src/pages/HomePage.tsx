import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import {  SortPopup } from '../components/SortPopup';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { Pagination } from '../components/Pagination';
import { fetchPizza, selectPizzaData } from '../redux/slices/pizzaSlice';
import { useAppDispatch } from '../redux/store';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const { items, status } = useSelector(selectPizzaData);


  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizza({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((item) => (
    <PizzaBlock count={0} key={item.id} {...item} /> // если передаешь дальше обьекты нужно исп спрэд операторы/ которые раскрывают дальше
  ));

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  {
    /* [ ... new Array(6)].map((_, i)=> <Skeleton key={i}/>)-- пустой массив чтоб скелетон отображался */
  }

  return (
    <div className="content">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <SortPopup  value={sort}/>
      </div>
      <h2 className="content__title"> Все Пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
