import Link from "next/link";
import "./InfoText.css";
import Button from "../button/Button";

export default function InfoText({
  style,
  title,
  subtitle,
  text,
  showButton,
  buttonText,
  buttonHref,
}) {
  return (
    <section className="infotext-container" style={style}>
      <h2 className="infotext-subtitle">
        {title && (
          <>
            {title}: <span className="infotext-green">{subtitle}</span>
          </>
        )}
      </h2>
      {text &&
        text.map((paragraph, index) => (
          <p key={index} className="infotext-text">
            {paragraph}
          </p>
        ))}
      {showButton && (
        <Link href={buttonHref}>
          <Button text={buttonText} className="button-left-bottom" />
        </Link>
      )}
    </section>
  );
}
