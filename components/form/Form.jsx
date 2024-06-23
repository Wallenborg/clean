// import "./Form.css";
// import Link from "next/link";
// import Button from "../button/Button";

// export default function Form() {
//   return (
//     <>
//       <section className="form-container">
//         {/* <div className="bubble">
//           <p className="bubble-text">Hello!</p>
//         </div> */}
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
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../button/Button";
import "./Form.css";

gsap.registerPlugin(ScrollTrigger);

export default function Form() {
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
    <section className="form-container">
      <div className="form-maincircle-circle" ref={circleRef}>
        <div className="form-maincircle-eyes">
          <span className="form-maincircle-eye"></span>
          <span className="form-maincircle-eye"></span>
        </div>
      </div>
      <div className="form-shape">
        <form className="form-login">
          <label className="label-form" for="fname">
            User Name:
          </label>

          <input type="text" id="fname" name="fname" value="dont work" />

          <label className="label-form" for="lname">
            Password:
          </label>
          <input type="text" id="lname" name="lname" value="just press login" />
        </form>
        <Link href="/clean">
          <Button text="Login" className="button-center-bottom" />
        </Link>
      </div>
    </section>
  );
}
