

export interface Product {
    id: number ,
    title :string,
    brand : string,
    category : string,
    description : string,
    discountPercentage : number,
    thumbnail : string,
    price : number,
    images : string[],
    rating : number,
} 

export interface Cart {
    id: number ,
    title :string,
    brand : string,
    category : string,
    description : string,
    discountPercentage : number,
    thumbnail : string,
    price : number,
    images : string[],
    rating : number,
    quantity : number,
    total : number
    }

export interface ModulValueProps {
    moduleValue : boolean
}

export interface quantityProps {
    id:number
}