import "./Hero.css";
import { circles } from "../../data/data.js";

export default function Hero() {
  return (
    <section className="hero-section">
      <h2 className="hero-text">
        A Graphical Experience
        <br />
        To
        <br />
        Track Your Sobriety Time
      </h2>
      {circles.map((circle) => (
        <div
          key={circle.index}
          className={`circle ${circle.size}`}
          style={{
            "--small-top": circle.smallTop,
            "--small-left": circle.smallLeft,
            "--medium-top": circle.mediumTop,
            "--medium-left": circle.mediumLeft,
            "--large-top": circle.largeTop,
            "--large-left": circle.largeLeft,
            "--hide-small": circle.hideOnSmall ? "none" : "block",
            "--hide-medium": circle.hideOnMedium ? "none" : "block",
            "--hide-large": circle.hideOnLarge ? "none" : "block",
          }}
          data-pos
        ></div>
      ))}
    </section>
  );
}
