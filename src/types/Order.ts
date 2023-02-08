import { Item, Product } from "./Product";

class Order {

    items: Item[];

    constructor() {
        this.items = new Array<Item>();

        this.addItem = this.addItem.bind(this);
    }

    addProductQuantity(product:Product, quantity:number):void {
        this.items.push( {item: product, quantity: quantity})
    }
    addItem(it : Item) {
        this.items.push( it);
    }

    get Size() {
        return this.items.length;
    }


} export default Order;