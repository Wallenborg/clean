import Link from "next/link";
import "./InfoText.css";
import Button from "../button/Button";

export default function InfoText() {
  return (
    <section className="infotext-container">
      <Link href="/sign-up">
        <Button text="Sign-up" className="button-left-bottom" />
      </Link>
    </section>
  );
}
