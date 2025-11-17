export function ShopItem({ name, price, image, switchDialogue, addToCart }) {
  return (
    <article className="shop-item" onClick={switchDialogue}>
      <header className="item-header">
        <img className="item-image" src={image} alt={name} />
        <div className="item-info">
          <strong>{name}</strong>
         <span>
  {price} <img src="/src/img/coin.png" alt="moneda" className="coin-icon" />
</span>

        </div>
      </header>

        <button
          className="add-button"
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
            switchDialogue();
          }}
        >
          Añadir al carro
        </button>

      <aside>
     
      </aside>
    </article>
  );
}
