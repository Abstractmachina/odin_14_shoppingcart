import { Product } from "../types/Product";

export function processInventoryJson(rawInventory:any[]) : Product[] {
    let outPutArray = new Array<Product>();

    rawInventory.forEach(obj => {
        let item:Product = {
            name: obj.name,
            unitPrice: obj.unitPrice,
            category: obj.category,
            image: obj.image,
            flavors: obj.flavors
        } 
        outPutArray.push(item);
    })

    return outPutArray;
}