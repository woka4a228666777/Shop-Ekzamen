import React from "react";
import { Product } from "../../services/Products";
import './style.scss'

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} style={{ width: "100%", height: "225px", objectFit: "cover" }} />
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;