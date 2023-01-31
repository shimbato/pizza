import { Routes, Route } from 'react-router-dom';
import { HeaderPizza } from './components/HeaderPizza';
import React from 'react';

import './scss/app.scss';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Cart } from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <HeaderPizza />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>   
      </div>
    </div>
  );
}

export default App;
