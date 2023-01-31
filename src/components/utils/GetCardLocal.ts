
import { CardItem } from '../../redux/slices/types';
import { calcTotalPrice } from './CalcTotalPrice';
export const GetCardLocal =()=>{
    const data = localStorage.getItem('card');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items)
return {
    items: items as CardItem[],
    totalPrice,
}

}