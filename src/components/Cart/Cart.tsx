import React, { useEffect, useState } from "react";
import { calculateTotalPrice } from "../../utils/Calculate-total-price";
import { CartItem } from "../../types/Cart-item";
import './style.scss'

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;

    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updated);
  };

  const handleRemove = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = calculateTotalPrice(cart);

  return (
    <div className="cart">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{
              borderBottom: "1px solid #ccc",
              padding: "1rem 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img src={item.image} alt={item.title} width={80} height={80} style={{objectFit: "cover"}}/>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price} ₽</p>
                </div>
              </div>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  style={{ width: "60px", marginRight: "1rem" }}
                />
                <button onClick={() => handleRemove(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
          <h2>Итого: {total} ₽</h2>
        </>
      )}
    </div>
  );
};

export default Cart;