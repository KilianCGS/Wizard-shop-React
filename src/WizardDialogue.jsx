import "./css/wizardDialogue.css";


export function WizardDialogue({ text }) {
  if (!text) return null;

  return (
    <div className="wizardDialogue">
      <p>{text}</p>
    </div>
  );
}
