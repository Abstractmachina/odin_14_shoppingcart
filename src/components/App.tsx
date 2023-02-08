import React, { FC, ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import '../styles/main.scss';

import Nav from './Nav';
import HomePage from './Home';
import ShopPage from './ShopPage';
import AboutPage from './AboutPage';
import ShoppingCart from './ShoppingCart';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';

const App: FC = () : ReactElement => {

    const [categories, setCategories] = useState(new Array<string>());


    function getCategories(categories:string[]) {
        setCategories(categories);
    }

  return (
    <Router>
        <div className="App">
            <Nav />
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/shop/*' element={<ShopPage getCategories = {getCategories}/>}>
                  {/* <Route index element={<Navigate to="all" replace />} />
                  <Route path=':category' element={<CategoryPage />} /> */}
                  
                </Route>
                
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/shoppingcart' element={<ShoppingCart/>}/>
            </Routes>

        </div>
    </Router>
  );
}

export default App;
