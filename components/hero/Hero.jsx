import "./Hero.css";

const circles = [
  { size: "small", top: "10px", left: "252px" },
  { size: "small", top: "70px", left: "350px" },
  { size: "small", top: "92px", left: "303px" },
  { size: "small", top: "125px", left: "290px" },
  { size: "small", top: "244px", left: "138px" },
  { size: "small", top: "260px", left: "318px" },
  { size: "small", top: "308px", left: "255px" },
  { size: "small", top: "325px", left: "180px" },
  { size: "small", top: "380px", left: "20px" },
  { size: "small", top: "420px", left: "112px" },
  { size: "small", top: "770px", left: "250px" },
  { size: "small", top: "1240px", left: "80px" },
  { size: "big", top: "-10px", left: "280px" },
  { size: "big", top: "170px", left: "260px" },
  { size: "big", top: "320px", left: "60px" },
  { size: "big", top: "720px", left: "300px" },
];

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
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`circle ${circle.size}`}
          style={{ "--top": circle.top, "--left": circle.left }}
          data-pos
        ></div>
      ))}
    </section>
  );
}
