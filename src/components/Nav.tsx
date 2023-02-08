import React, { FC, ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import Order from "../types/Order";

import cartGraphic from '../assets/bowl.svg';

type NavProps = {
    order: Order;
}

type OrderNumberProps = {
    orderNumber: number;
}

const OrderNumber: FC<OrderNumberProps> = ({orderNumber}):ReactElement|null => {
    if (orderNumber === 0){
        return (null);
    }
    else {
        return (
            <div className="item-count">{orderNumber}</div>
        )
    }
}

const Nav: FC<NavProps> = ({order}):ReactElement => {

    useEffect(() => {

    }, []);

    return <nav className="main-nav">
        <Link to='/'>
            <h1 className='logo'>Plan D(umplings)</h1>
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
                        <OrderNumber orderNumber={order.Size}/>
                    </div>
                </li></Link>
            
        </ul>
        
    </nav>
}

export default Nav;