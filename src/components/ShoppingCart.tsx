import React, { FC, ReactElement } from "react";
import { skewerString, unskewerString } from "../functions/util";
import Order from "../types/Order";


type ShoppingCartProps = {
    order: Order;
    updateOrder: (order:Order) => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({order, updateOrder}): ReactElement => {

    function updateQuantity(e:any) {
        let o = order.deepCopy();
        //find item index with the matching name
        let idx = o.items.findIndex(it => it.Name === unskewerString(e.target.id));
        o.items[idx].Quantity = e.target.value;
        updateOrder(o);

        console.log(order);
    }

    return (
    <div className="cart">
        <h2>Your Shopping Bag</h2>
        <ol>
        {order.items.map((it, index) => {
            return (
            <li key={index}>
                <div className="img-wrapper">
                    <img src={require(`../assets/${it.Image}`)} alt={"Picture of"+it.Name}/>
                </div>
                <div className="text-wrapper">
                    <div>{it.product.name} {it.UnitPrice}</div>
                    <input type="number" id={skewerString(it.Name)} defaultValue={it.Quantity} onChange={updateQuantity}/>
                </div>
            </li>);
        })}
        </ol>
    </div>);
}

export default ShoppingCart;