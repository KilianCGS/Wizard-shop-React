import { useState } from "react";
import "./css/Portada.css";
import WizardCabin from "./img/WizardCabin.jpg";

export function Portada({ onStart }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(onStart, 2000);
  };

  return (
    <div className={`portada ${fadeOut ? "fade-out" : ""}`}>
      <img src={WizardCabin} alt="Cabaña del mago" className="portada-img" />
      <button className="portada-btn" onClick={handleClick}>
        Pasar a la tienda
      </button>
    </div>
  );
}
