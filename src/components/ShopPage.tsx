import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import dumplingInventory from '../assets/dumpling-inventory.json';


type ShopProps = {
    getCategories: (categories:string[]) => void;
}


const ShopPage: FC<ShopProps> = ({getCategories}): ReactElement => {

    const [inventory, setInventory] = useState(dumplingInventory.inventoryList);
    const [categories,setCategories] = useState(_getCategories());

    useEffect(() => {
        getCategories(_getCategories());
    },[]);

    function _getCategories(): string[] {
        const categories = new Set<string>();
        
        inventory.forEach(item => {
            categories.add(item.category);
        })

        return Array.from(categories.values());
    }

    return (
        
    <div className="shop">
        
        <nav>
        {categories.map((category:string) => {
            return (
            <Link to= {category} key={category}>
                <button id={'btn-'+category}>{category}</button>
            </Link>
            )
        })}
        <input type='text'/>
        </nav>
        <Outlet />
    </div>
    );
}

export default ShopPage;