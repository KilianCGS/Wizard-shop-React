import { items } from "./items.js";
import { ShopItem } from "./ShopItem.jsx";
import "./css/items.css";

export function ShopItems({ setDialogue, addToCart }) {
  return (
    <section className="shop-items">
      {items.map((item) => (
        <ShopItem
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.image}
          switchDialogue={() => setDialogue(item.description)}
          addToCart={() => addToCart(item)}
        />
      ))}
    </section>
  );
}
