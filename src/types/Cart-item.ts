import { Product } from "../services/Products";

export type CartItem = Product & {
  quantity: number;
};