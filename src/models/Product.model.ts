// type ProductCategoryType = "Food" | "Technology" | "Clothes";

export interface Product {
  id?: number;
  name: string;
  stock: number;
  price: number;
  category: string;
  description: string;
}
