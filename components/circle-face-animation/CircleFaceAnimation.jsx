import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CircleFaceAnimation.css";

gsap.registerPlugin(ScrollTrigger);

export default function CircleFaceAnimation() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    gsap.fromTo(
      circle,
      { x: -40, y: 70, opacity: 0 },
      {
        x: 0,
        y: 0,
        rotate: 25,
        opacity: 1,
        scrollTrigger: {
          trigger: circle,
          start: "top 70%",
          end: "bottom center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="form-maincircle-circle" ref={circleRef}>
      <div className="form-maincircle-eyes">
        <span className="form-maincircle-eye"></span>
        <span className="form-maincircle-eye"></span>
      </div>
    </div>
  );
}
