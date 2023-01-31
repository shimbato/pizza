import { type } from '@testing-library/user-event/dist/type';
import React, { FC, useState } from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate'


type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number)=>void;
}
export const Categories: React.FC<CategoriesProps> = React.memo(({value, onChangeCategory}) => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
useWhyDidYouUpdate('Categories', {value, onChangeCategory})
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
})


