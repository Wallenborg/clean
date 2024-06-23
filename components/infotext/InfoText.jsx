import Link from "next/link";
import "./InfoText.css";
import Button from "../button/Button";

export default function InfoText() {
  return (
    <section className="infotext-container">
      <h2 className="infotext-subtitle">
        CLEAN:
        <span className="infotext-green">
          {" "}
          Track Your Sobriety Journey
        </span>{" "}
      </h2>
      <p className="infotext-text">
        CLEAN is an innovative app designed to help you track your sobriety time
        through a visually experience. The main feature is a dynamic circle that
        represents a single day. Over the course of 24 hours, this circle
        transitions from white to black, visually marking the passage of time.
        Each new day adds a white circle, symbolizing your sobriety time.
      </p>
      <p className="infotext-text">
        To use the app, register and then simply log in with your username and
        password. If you need a fresh start, you can restart the date and begin
        a new journey.
      </p>
      <p className="infotext-text">
        CLEAN provides a clear, visual representation of your achievements,
        making it easier to stay motivated and on track.
      </p>
      <Link href="/sign-up">
        <Button text="Sign-up" className="button-left-bottom" />
      </Link>
    </section>
  );
}
