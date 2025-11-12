import { items } from "./items.js";
import { ShopItem } from "./ShopItem.jsx";
import "./css/items.css";


export function ShopItems({setDialogue}) {

  return (
    <>
      <section className="shop-items">
      
        {items.map((item) => (
          <ShopItem
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            switchDialogue={() => setDialogue(item.description)}
          />
        ))}
      </section>
    </>
  );
}


