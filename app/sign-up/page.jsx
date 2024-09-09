//sign-up/page.js
"use client";
import Header from "@/components/header/Header";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";
import RandomCirclesBackground from "@/components/random-circles-background/RandomCirclesBackground";
import SignUpForm from "@/components/sign-up-form/SignUpForm";

export default function SignupPage() {
  return (
    <div className="wrapper">
      <RandomCirclesBackground />
      <Header includeNav={false} />
      <InfoText
        style={{ marginTop: "120px" }}
        title="Start"
        subtitle="Your Sobriety Journey"
        text={[
          "Sign up is quick and easy with CLEAN. Begin tracking your sobriety journey with our intuitive app interface. Each day is represented by a small circle, and every four weeks is marked by a large circle.",
          "In the menu, you can monitor your progress and optionally restart your journey whenever needed.",
          "To get started, simply register with your chosen username, password, and select your sobriety start date. Your information is securely stored and kept private. We only save your registration details to maintain the confidentiality of your data.",
          "Track your clean time visually and stay motivated with CLEAN. Whether you're starting fresh or continuing your progress, our app offers a clear visualization of your accomplishments, helping you stay focused on your goals.",
        ]}
        showButton={false}
        buttonText=""
        buttonHref="/"
      />

      <SignUpForm />

      <InfoText
        style={{ marginTop: "10px" }}
        title="PWA:"
        subtitle="Enhance Your User Experience"
        text={[
          "A Progressive Web App (PWA) leverages modern web technologies to provide an app-like experience directly from the web. By installing a PWA on your mobile device, it can operate and appear similar to a app.",
          "How to Install the PWA",
          "**For Android Users**:",
          "1. Open the browser menu (three dots in the top-right corner).",
          "2. Select 'Add to Home screen'.",
          "3. Confirm the installation.",
          "",
          "**For iOS Users (Safari)**:",
          "1. Open the Share menu (the square with an arrow pointing up).",
          "2. Select 'Add to Home Screen'.",
          "3. Confirm by tapping 'Add'.",
        ]}
        showButton={true}
        buttonText="Back"
        buttonHref="/"
      />

      <Fotter />
    </div>
  );
}
