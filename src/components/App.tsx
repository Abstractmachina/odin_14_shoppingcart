import React, { FC, ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/main.scss';

import Nav from './Nav';
import HomePage from './Home';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import ShoppingCart from './ShoppingCart';

const App: FC = () : ReactElement => {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/shoppingcart' element={<ShoppingCart/>}/>
            </Routes>

        </div>
    </Router>
  );
}

export default App;
