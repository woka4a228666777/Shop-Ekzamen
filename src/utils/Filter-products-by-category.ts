import { Product } from "../services/Products";

export const filterProductsByCategory = (products: Product[], category: string): Product[] => {
  if (category === "Все") return products;
  return products.filter((p) => p.category === category);
};