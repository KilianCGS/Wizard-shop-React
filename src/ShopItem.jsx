export function ShopItem({ name, price, image, description, switchDialogue }) {
  return (
    <article className="shop-item" onClick={switchDialogue}>
      <header className="item-header">
        <img className="item-image" src={image} alt={name} />
        <div className="item-info">
          <strong>{name}</strong>
          <span>{price} monedas</span>
        </div>
      </header>

      <p className="item-description">{description}</p>

      <aside>
        <button className="add-button" >
          Añadir al carro
        </button>
      </aside>
    </article>
  );
}

