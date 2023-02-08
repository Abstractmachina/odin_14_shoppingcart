import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Product } from "../types/Product";

import '../styles/CategoryPage.scss';
import { squashString } from "../functions/util";

type CategoryProps = {
    inventory:Product[];
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
                const normalizedName =  squashString(product.name);
                return (
                <Link to={"../product/"+ normalizedName} onClick={onProductSelected} key={normalizedName}>
                    <div className="product-card" id={product.name} >
                        <div className="product-thumbnail">
                            <img src={require(`../assets/${product.image}`)} alt={"Picture of "+product.name}/>
                        </div>
                        <h2>{product.name}</h2>
                        <h3>EUR { '\u20AC'+Number(product.unitPrice).toFixed(2)}</h3>
                        <h4>Flavors:</h4>
                        <p>{product.flavors.join(", ")}</p>
                    </div>
                </Link>
            )}) 
        }
    </div>
    );
}

export default CategoryPage;