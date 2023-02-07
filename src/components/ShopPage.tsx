import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, Navigate } from "react-router-dom";

import dumplingInventory from '../assets/dumpling-inventory.json';
import { processInventoryJson } from "../functions/FileProcessor";
import CategoryPage from "./CategoryPage";
import { Item } from "../types/Item";


type ShopProps = {
    getCategories: (categories:string[]) => void;
}


const ShopPage: FC<ShopProps> = ({getCategories}): ReactElement => {

    const [inventory, setInventory] = useState(processInventoryJson(dumplingInventory.inventoryList));
    const [categories,setCategories] = useState(_getCategories());

    useEffect(() => {
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
        <Link to= 'all'>
                <button id={'btn_all'}>All</button>
            </Link>
        {categories.map((category:string) => {
            return (
            <Link to= {category} key={category}>
                <button id={'btn-'+category}>{category}</button>
            </Link>
            )
        })}
        <input type='text'/>
        </nav>
        <Routes>
            <Route index element={<Navigate to="all" replace />} />
            <Route path=":category" element={<CategoryPage inventory={inventory}/>} />
        </Routes>
        {/* <Outlet /> */}
    </div>
    );
}

export default ShopPage;