import "./css/cart.css";

export function Cart({ cart, removeOne }) {
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-box">
        <p>Carro vacío</p>
      </div>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-box">
      <h3 className="cart-title">Items añadidos</h3>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.name} className="cart-item">
            <span className="cart-item-info">
             {item.name} x{item.qty} — {item.price * item.qty} <img src="/src/img/coin.png" alt="moneda" className="coin-icon" />

            </span>

            <button
              className="cart-remove-btn"
              onClick={() => removeOne(item.name)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p className="cart-total">
        Total: <strong>{total} monedas</strong>
      </p>
    </div>
  );
}
