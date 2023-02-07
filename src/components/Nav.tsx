import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Nav: FC = ():ReactElement => {
    return <nav>
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
            <li>Cart</li></Link>
            
        </ul>
        
    </nav>
}

export default Nav;