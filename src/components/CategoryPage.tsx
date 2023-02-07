import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


// type CategoryProps = {
//     category:string;
// }

const CategoryPage: FC = ( ): ReactElement => {

    const {category} = useParams();

    useEffect(() => {
        console.log(category);
    })

    
    return (
    
    <div className="product-page">
        Category {category}
    </div>
    );
}

export default CategoryPage;