import "./Button.css";

export default function Button({ onClick, text, className }) {
  return (
    <button className={`button-clean ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
