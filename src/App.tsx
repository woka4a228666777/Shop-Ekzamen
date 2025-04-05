import React, { useEffect, useState } from "react";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import './App.scss'

const App: React.FC = () => {
  const [page, setPage] = useState<string>(window.location.hash || "#catalog");

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash || "#catalog");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="shop">
      <nav>
        <button onClick={() => (window.location.hash = "#catalog")}>Каталог</button>
        <button onClick={() => (window.location.hash = "#cart")}>Корзина</button>
      </nav>
      <main>
        {page === "#cart" ? <Cart /> : <Catalog />}
      </main>
    </div>
  );
};

export default App;