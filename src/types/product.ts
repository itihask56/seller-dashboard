// src/types/product.ts
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    thumbnail: string;
}

//generally we use interface with obj
// we use type with primitive data type