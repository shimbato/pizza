import { CardItem } from './../../redux/slices/types';


export const calcTotalPrice = (items: CardItem[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  };