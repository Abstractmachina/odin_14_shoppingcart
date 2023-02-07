import { Item } from "../types/Item";

export function processInventoryJson(rawInventory:any[]) : Item[] {
    let outPutArray = new Array<Item>();

    rawInventory.forEach(obj => {
        let item:Item = {
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