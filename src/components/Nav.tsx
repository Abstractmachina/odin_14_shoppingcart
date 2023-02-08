import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Order from "../types/Order";

import cartGraphic from '../assets/bowl.svg';

type NavProps = {
    order: Order;
}

const Nav: FC<NavProps> = ({order}):ReactElement => {
    return <nav className="main-nav">
        <Link to='/'>
            <h1 className='logo'>Mama's Dumplings</h1>
        </Link>
        <ul className="nav-links">
            <Link to='/shop'>
                <li>Shop</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/shoppingcart'>
                <li>
                    <div className="cart-wrapper">
                        <img src = {cartGraphic} alt="shopping cart"/>
                        <div className="item-count">1</div>
                    </div>
                </li></Link>
            
        </ul>
        
    </nav>
}

export default Nav;