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
      <InfoText
        style={{ marginTop: "120px" }}
        title="Sign Up"
        subtitle="Start Your Sobriety Journey"
        text={[
          "Sign up is quick and easy with CLEAN. Begin tracking your sobriety journey with our intuitive app interface. Each day is represented by a small circle, and every four weeks is marked by a large circle.",
          "In the menu, you can monitor your progress and optionally restart your journey whenever needed.",
          "To get started, simply register with your chosen username, password, and select your sobriety start date. Your information is securely stored and kept private. We only save your registration details to maintain the confidentiality of your data.",
          "Track your clean time visually and stay motivated with CLEAN. Whether you're starting fresh or continuing your progress, our app offers a clear visualization of your accomplishments, helping you stay focused on your goals.",
        ]}
        showButton={true}
        buttonText="Back"
        buttonHref="/"
      />
      <Fotter />
    </div>
  );
}
