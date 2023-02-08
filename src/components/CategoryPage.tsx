import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Item } from "../types/Item";

import '../styles/CategoryPage.scss';
import ProductPage from "./ProductPage";
import { MouseEventHandler } from "react";



type CategoryProps = {
    inventory:Item[];
    productSelectedHandler: (pid:string) => void;
}

const CategoryPage: FC<CategoryProps> = ({inventory, productSelectedHandler} ): ReactElement => {

    const {category} = useParams();

    const [products, setProducts] = useState(getProducts(category));

    useEffect(() => {
        setProducts(getProducts(category));
    },[category])


    function getProducts(category:string|undefined) {
        if (category === 'all') return inventory;
       let result = inventory.filter(item => item.category === category)
       return result;
    };
    
    function onProductSelected(e:any) {
        let node = e.target;
        while(node.parentNode !== null) {
            if (node.classList.contains("product-card") ) break;
            node = node.parentNode;
        }
        productSelectedHandler(node.id);
    }
    
    return (
    
    <div className="product-page">
        { 
            products.map(product => {
                const normalizedName = product.name.replace(/\s/g, "");
                return (
                <Link to={"../product/"+ normalizedName} onClick={onProductSelected} key={normalizedName}>
                    <div className="product-card" id={product.name} >
                        <div className="product-thumbnail">
                            <img src={require(`../assets/${product.image}`)} alt={"Picture of "+product.name}/>
                        </div>
                        <h2>{product.name}</h2>
                        <h3>EUR { product.unitPrice}</h3>
                        <h4>Flavors:</h4>
                        <p>{product.flavors}</p>
                    </div>
                </Link>
            )}) 
        }
    </div>
    );
}

export default CategoryPage;