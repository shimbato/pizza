import { Categories } from './components/Categories';
import { HeaderPizza } from './components/HeaderPizza';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <HeaderPizza />
      <div className="content">
        <div className="container">
          <div className="content_top">
            <Categories />
            <Sort />
            <h2 className="content__title"> Все Пиццы</h2>
            <div className="content__items">
              <PizzaBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
