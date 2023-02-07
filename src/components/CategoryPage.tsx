import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Item } from "../types/Item";

import '../styles/CategoryPage.scss';



type CategoryProps = {
    inventory:Item[];
}

const CategoryPage: FC<CategoryProps> = ({inventory} ): ReactElement => {

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
    
    return (
    
    <div className="product-page">
        { 
            products.map(product => {
                return (
                <div className="product-card" key={product.name}>
                    <div className="product-thumbnail">
                        <img src={require(`../assets/${product.image}`)} alt={"Picture of "+product.name}/>
                    </div>
                    <h2>{product.name}</h2>
                    <h3>EUR { product.unitPrice}</h3>
                    <h4>Flavors:</h4>
                    <p>{product.flavors}</p>
                </div>
            )}) 
        }
    </div>
    );
}

export default CategoryPage;