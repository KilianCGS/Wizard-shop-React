import { useState } from "react";
import { ShopItems } from "./ShopItems.jsx";
import { WizardDialogue } from "./WizardDialogue.jsx";
import { Cart } from "./Cart.jsx";
import { Portada } from "./Portada.jsx";
import "./css/Shop.css";

export function Shop() {
  const [dialogue, setDialogue] = useState(
    "¡Bienvenido, viajero! Siéntete libre de echar un vistazo a mis productos."
  );

  const [showItems, setShowItems] = useState(false);
  const [cart, setCart] = useState([]);
  const [showPortada, setShowPortada] = useState(true);

  const toggleShopItems = () => setShowItems(!showItems);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeOne = (name) => {
    setCart((prev) => {
      const item = prev.find((i) => i.name === name);
      if (!item) return prev;

      if (item.qty === 1) {
        return prev.filter((i) => i.name !== name);
      }

      return prev.map((i) =>
        i.name === name ? { ...i, qty: i.qty - 1 } : i
      );
    });
  };

  const handleStart = () => setShowPortada(false);

  return (
    <div className="shop-wrapper">
      {showPortada && <Portada onStart={handleStart} />}

      <div className="shop-background"></div>

      <div className="shop-content">
        <header className="shop-header">
          <WizardDialogue text={dialogue} />
        </header>

        <main className="shop-main">
          {!showItems && (
            <button className="show-items-btn" onClick={toggleShopItems}>
              Ver productos
            </button>
          )}

          {showItems && (
            <div className="shop-items-container">
              <button className="close-button" onClick={toggleShopItems}>
                ✕
              </button>

              <ShopItems setDialogue={setDialogue} addToCart={addToCart} />
            </div>
          )}
        </main>
      </div>

      <Cart cart={cart} removeOne={removeOne} />
    </div>
  );
}
