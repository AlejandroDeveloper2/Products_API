import { Product } from "@models/Product.model";

export function hasAllProperties(obj: any): obj is Product {
  const expectedKeys = ["name", "stock", "price", "category", "description"];
  const objKeys = Object.keys(obj);
  return expectedKeys.every((key) => objKeys.includes(key));
}
