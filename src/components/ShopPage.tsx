import React, { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

const ShopPage: FC = (): ReactElement => {
    return <div className="shop">
        <nav>
            <Link to= "steamed">
                <button id="btn-steamed">Steamed</button>
            </Link>
            <Link to='fried'>
                <button id='btn-fried'>Fried</button>
            </Link>
            <input type='text'/>
        </nav>
        <Outlet />
    </div>;
}

export default ShopPage;