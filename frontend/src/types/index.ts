export interface Product {
    id: number;
    name: string;
    category: string;
    costPrice: number;
    sellingPrice: number;
    quantity: number;
    profitMargin: number;
    imageUrl?: string;
    description?: string;
}
