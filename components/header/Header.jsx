import { Afacad } from "next/font/google";
import { FaCircleUser } from "react-icons/fa6";
import "./Header.css";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Header({ includeNav }) {
  return (
    <header className="header-component">
      <h1 className={`${afacad.className} header-title`}>CLEAN</h1>
      {includeNav && <FaCircleUser className="header-nav" />}
    </header>
  );
}
