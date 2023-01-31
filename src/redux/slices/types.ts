export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
  };

 export type Pizza = {
    id: string;
    title: string ; 
    imageUrl: string ; 
    sizes: number[];
    price: number;
    raiting: number;
    types: number[]
  }

  export interface PizzaSliceState{
    items:Pizza[];
    status: Status
  }
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
  } 


  ///---- filter----

  export enum SortPropertyEnum {
    RAITING_DES = 'raiting',
    RAITING_ASC = '-raiting',
    PRICE_DES = 'price',
    PRICE_ASC = '-price',
    TITLE_DES = 'title',
    TITLE_ASC = '-title',
  }
  
  export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
  }
  export interface FilterSliceState {
    searchValue: string,
    categoryId: number,
    sort: Sort;
    currentPage: number,
    open: boolean,
  }


  ///----card-----

export type CardItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  
  }
  
  export interface CardSliceState {
    totalPrice: number;
    items: CardItem[];
  }

  //=====
  export type PizzaBlockProps ={
    id: string;
    title: string ; 
    imageUrl: string ; 
    sizes: number[];
    price: number;
    raiting: number;
    types: string[];
    count: number;
  }
  
  