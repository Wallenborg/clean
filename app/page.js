"use client";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Form from "@/components/form/Form";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";
import Loader from "@/components/loader/Loader";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setLoading(false);
    };
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setLoading(false);
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    }
    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="wrapper no-scroll">
      <Header includeNav={false} />
      <Hero />
      <div className="box">
        <Form />
        <InfoText
          style={{ marginTop: "80px" }}
          title="CLEAN"
          subtitle="Track Your Sobriety Journey"
          text={[
            "CLEAN is an innovative app designed to help you track your sobriety time through a visually experience. The main feature is a dynamic circle that represents a single day. Over the course of 24 hours, this circle transitions from white to black, visually marking the passage of time. Each new day adds a white circle, symbolizing your sobriety time.",
            "To use the app, register and then simply log in with your username and password. If you need a fresh start, you can restart the date and begin a new journey.",
            "CLEAN provides a clear, visual representation of your achievements, making it easier to stay motivated and on track.",
          ]}
          showButton={true}
          buttonText="Sign Up"
          buttonHref="/sign-up"
        />
      </div>
      <Fotter />
    </main>
  );
}
