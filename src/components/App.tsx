import React, { FC, ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import '../styles/main.scss';

import Nav from './Nav';
import HomePage from './Home';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import ShoppingCart from './ShoppingCart';
import Order from '../types/Order';
import { Item } from '../types/Product';

const App: FC = () : ReactElement => {

    const [order, setOrder] = useState(new Order());

    function onItemAdded(it:Item) {
      const or : Order = order.deepCopy();
      or.addItem(it);
      setOrder(or);

    }

  return (
    <Router>
        <div className="App">
            <Nav order={order}/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/shop/*' element={<ShopPage addItemHandler={onItemAdded}/>} />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/shoppingcart' element={<ShoppingCart/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
