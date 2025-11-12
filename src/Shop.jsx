import { useState } from "react";
import { ShopItems } from "./ShopItems.jsx";
import { WizardDialogue } from "./WizardDialogue.jsx";
import "./css/Shop.css";

export function Shop() {
  const [dialogue, setDialogue] = useState(
    "¡Bienvenido, viajero! Siéntete libre de echar un vistazo a mis productos."
  );
  
  const [showItems, setShowItems] = useState(false);

  const toggleShopItems = () => setShowItems(!showItems);



  return (
    <div className="shop-wrapper">


      {/* Fondo separado */}
      <div className="shop-background"></div>




      {/* Contenido principal */}

      <div className="shop-content">
        <header className="shop-header">
          <WizardDialogue text={dialogue} />
          <div className="cart"> 0</div>
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
              <ShopItems setDialogue={setDialogue} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
