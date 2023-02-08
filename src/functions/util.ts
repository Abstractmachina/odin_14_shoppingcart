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

//removes all whitespace from a string and returns new string.
export function squashString(input:string) {
    return input.replace(/\s/g, "");
}
//replaces all whitespace with hyphen from a string and returns new string.
export function skewerString(input:string) {
    return input.replace(/\s/g, "-");
}

//replaces all whitespace with hyphen from a string and returns new string.
export function unskewerString(input:string) {
    return input.replace(/-/g, " ");
}