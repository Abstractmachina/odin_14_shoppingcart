import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import dumplingInventory from '../assets/dumpling-inventory.json';
import { processInventoryJson } from "../functions/FileProcessor";

import '../styles/ProductPage.scss';
import Order from "../types/Order";
import { Item } from "../types/Product";


type ProductProps = {
    pid:string;
    addItemHandler: (it:Item) => void;
    
}

const ProductPage: FC<ProductProps> = ({pid, addItemHandler: addItemHandler}): ReactElement => {

    const [product, setProduct] = useState(fetchProduct(pid));

    useEffect(() => {
        setProduct(fetchProduct(pid));
    },[])

    function fetchProduct(pid:string) {
        const item = processInventoryJson(dumplingInventory.inventoryList).filter(input => input.name === pid);

        return item[0];
    };

    function handleAddToCart(e:any) {
        e.preventDefault();
        var formdata = new FormData(e.target);
        var dataPull:any = formdata.get("quantity");
        let quant:number = (dataPull !== null)? parseFloat(dataPull) : 0;
        let output:Item = {item: product, quantity: quant};
        addItemHandler(output);
    };

    return (
       
    <div className="product-page">
        <button id="btn_returnToCategoryPage">Go Back</button>
        <div className="product-display">
            <div className="img-wrapper">
                <img src={require(`../assets/${product.image}`)} alt={"Picture of "+product.name}/>
            </div>
            <div className="text-wrapper">
                <h2>{product.name}</h2>
                <h3>EUR{product.unitPrice}</h3>
                <form onSubmit={handleAddToCart}>
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