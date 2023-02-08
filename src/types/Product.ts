export type Product = {
    name:string,
    unitPrice:number,
    category: string,
    image: string,
    [key:string]:any
}


export type Item = {
    item: Product,
    quantity: number
}