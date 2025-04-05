import React, { useState } from "react";
import { products, Product } from "../../services/Products";
import { filterProductsByCategory } from "../../utils/Filter-products-by-category";
import Filter from "../Filter/Filter";
import ProductCard from "../Product-card/Product-card";
import { CartItem } from "../../types/Cart-item";
import './style.scss'

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const filtered = filterProductsByCategory(products, selectedCategory);

const handleAddToCart = (product: Product) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existing = cart.find((item: CartItem) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} добавлен в корзину!`);
};

  return (
    <div className="catalog">
      <h1>Каталог товаров</h1>
      <Filter selected={selectedCategory} onChange={setSelectedCategory} />
      <div className="product-cards">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;