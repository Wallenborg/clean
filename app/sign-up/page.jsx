"use client";
import Header from "@/components/header/Header";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="wrapper">
      <Header includeNav={false} />
      <InfoText />
      <Link href="/">
        <Button text="BACK" className="" />
      </Link>
      <Fotter />
    </div>
  );
}
