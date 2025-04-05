import Iphone16 from '../assets/img/iPhone16.jpeg'
import Tshirt from '../assets/img/футболька.jpg'
import MacBook from '../assets/img/mac.jpg'
import Jacket from '../assets/img/Jacket.jpeg'

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  { id: 1, title: "Смартфон", price: 15000, category: "Электроника", image: Iphone16 },
  { id: 2, title: "Футболка", price: 1000, category: "Одежда", image: Tshirt },
  { id: 3, title: "Ноутбук", price: 50000, category: "Электроника", image: MacBook },
  { id: 4, title: "Куртка", price: 3000, category: "Одежда", image: Jacket },
];