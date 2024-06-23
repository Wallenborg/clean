"use client";
import { useState, useEffect } from "react";
import { Afacad } from "next/font/google";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import "./Header.css";
import DropdownMenu from "../dropdownmenu/DropdownMenu";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Header({ includeNav }) {
  const [opacity, setOpacity] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const startDate = "2022-04-23";

  return (
    <header
      style={{ opacity, transition: "opacity 0.2s ease-in-out" }}
      className="header-component"
    >
      <h1 className={`${afacad.className} header-title`}>CLEAN</h1>
      {includeNav && (
        <div className="header-nav-wrapper">
          {dropdownVisible ? (
            <IoMdCloseCircle
              style={{ color: "var(--clr-accent-2)" }}
              className="header-nav"
              onClick={toggleDropdown}
            />
          ) : (
            <FaCircleUser className="header-nav" onClick={toggleDropdown} />
          )}
          {dropdownVisible && <DropdownMenu startDate={startDate} />}
        </div>
      )}
    </header>
  );
}
