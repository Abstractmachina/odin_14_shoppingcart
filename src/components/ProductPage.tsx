import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import dumplingInventory from '../assets/dumpling-inventory.json';
import { processInventoryJson } from "../functions/FileProcessor";
import { NumericFormat } from "react-number-format";

import '../styles/ProductPage.scss';


type ProductProps = {
    pid:string;
}

const ProductPage: FC<ProductProps> = ({pid}): ReactElement => {

    const [item, setItem] = useState(fetchProduct(pid));

    useEffect(() => {
        setItem(fetchProduct(pid));
    },[])

    function fetchProduct(pid:string) {
        const item = processInventoryJson(dumplingInventory.inventoryList).filter(input => input.name === pid);

        return item[0];
    };

    return (
       
    <div className="product-page">
        <button id="btn_returnToCategoryPage">Go Back</button>
        <div className="product-display">
            <div className="img-wrapper">
                <img src={require(`../assets/${item.image}`)} alt={"Picture of "+item.name}/>
            </div>
            <div className="text-wrapper">
                <h2>{item.name}</h2>
                <h3>EUR{item.unitPrice}</h3>
                <form>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" id="quantity" min="1" max="999" defaultValue={1}/>
                <button type="submit">Add To Cart</button>
                </form>
                
            </div>
        </div>
        
    </div>
    );
}

export default ProductPage;