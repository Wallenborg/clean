import "./Form.css";
import Link from "next/link";
import Button from "../button/Button";

export default function Form() {
  return (
    <>
      <section className="form-container">
        <div className="form-maincircle-circle">
          <div className="form-maincircle-eyes">
            <span className="form-maincircle-eye"></span>
            <span className="form-maincircle-eye"></span>
          </div>
        </div>
        <div className="form-shape">
          <Link href="/clean">
            <Button text="Login" className="button-center" />
          </Link>
        </div>
      </section>
    </>
  );
}
