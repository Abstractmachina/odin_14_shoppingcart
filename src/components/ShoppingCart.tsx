import React, { FC, ReactElement } from "react";
import Order from "../types/Order";


type ShoppingCartProps = {
    order: Order;
}

const ShoppingCart: FC<ShoppingCartProps> = ({order}): ReactElement => {
    return (
    <div className="cart">
        <ol>
        {order.items.map((it, index) => {
            return <li key={index}>{it.product.name} {it.Quantity}</li>
        })}
        </ol>
    </div>);
}

export default ShoppingCart;