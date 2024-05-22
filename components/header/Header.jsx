"use client";
import { useState, useEffect } from "react";
import { Afacad } from "next/font/google";
import { FaCircleUser } from "react-icons/fa6";
import "./Header.css";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Header({ includeNav }) {
  const [opacity, setOpacity] = useState(1);

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

  return (
    <header
      style={{ opacity, transition: "opacity 0.2s ease-in-out" }}
      className="header-component"
    >
      <h1 className={`${afacad.className} header-title`}>CLEAN</h1>
      {includeNav && <FaCircleUser className="header-nav" />}
    </header>
  );
}
