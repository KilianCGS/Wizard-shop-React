import { useState, useEffect, useRef } from "react";
import "./css/wizardDialogue.css";

export function WizardDialogue({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    clearInterval(intervalRef.current);
    setDisplayedText("");

    let index = 0;

    intervalRef.current = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(intervalRef.current);
      }
    }, 10);

    return () => clearInterval(intervalRef.current);
  }, [text]);

  if (!text) return null;

  return (
    <div className="wizardDialogue">
      <p>{displayedText}</p>
    </div>
  );
}

/* clearInterval es necesaria para no "olvidar" el primer carácter el primer carácter desaparece
porque la combinación de renders dobles, estado asíncrono y variable local
reiniciada provoca que la primera letra sea sobrescrita antes de mostrarse. */