export type Product = {
    name:string,
    unitPrice:number,
    category: string,
    image: string,
    [key:string]:any
}


export class Item {
    product: Product;
    quantity: number;
    constructor(product:Product, quantity:number) {
        this.product = product;
        this.quantity = quantity;
    }

    get Name() {return this.product.name;}
    get Quantity() {return this.quantity;}
    set Quantity(num:number) {this.quantity = num;}
    get Image() { return this.product.image;}
    get UnitPrice() {return this.product.unitPrice;}
}