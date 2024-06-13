// import "./Form.css";
// import Link from "next/link";
// import Button from "../button/Button";

// export default function Form() {
//   return (
//     <>
//       <section className="form-container">
//         <div className="bubble">
//           <p className="bubble-text">Hello!</p>
//         </div>
//         <div className="form-maincircle-circle">
//           <div className="form-maincircle-eyes">
//             <span className="form-maincircle-eye"></span>
//             <span className="form-maincircle-eye"></span>
//           </div>
//         </div>
//         <div className="form-shape">
//           <Link href="/clean">
//             <Button text="Login" className="button-center-bottom" />
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Button from "../button/Button";
import "./Form.css";

gsap.registerPlugin(ScrollTrigger);

const Form = () => {
  const formContainerRef = useRef(null);
  const circleRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { x: -30, y: 150, opacity: 0, rotate: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 25,
        duration: 1,
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: "20% 60%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      bubbleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: "center center",
          end: "center 45%",
          scrub: true,
          markers: true,
          onEnter: () =>
            gsap.to(bubbleRef.current, { opacity: 1, duration: 0.5 }),
          onLeave: () =>
            gsap.to(bubbleRef.current, { opacity: 0, duration: 0.5 }),
          onEnterBack: () =>
            gsap.to(bubbleRef.current, { opacity: 0, duration: 0.5 }),
          onLeaveBack: () =>
            gsap.to(bubbleRef.current, { opacity: 0, duration: 0.5 }),
        },
      }
    );
  }, []);

  return (
    <section className="form-container" ref={formContainerRef}>
      <div className="bubble" ref={bubbleRef}>
        <p className="bubble-text">Hello!</p>
      </div>
      <div className="form-maincircle-circle" ref={circleRef}>
        <div className="form-maincircle-eyes">
          <span className="form-maincircle-eye"></span>
          <span className="form-maincircle-eye"></span>
        </div>
      </div>
      <div className="form-shape">
        <Link href="/clean">
          <Button text="Login" className="button-center-bottom" />
        </Link>
      </div>
    </section>
  );
};

export default Form;
