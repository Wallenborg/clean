"use client";
import Header from "@/components/header/Header";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";

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
      <InfoText
        style={{ marginTop: "10px" }}
        title="Sign Up"
        subtitle="Placeholder"
        text={[
          " Here the user will add user name, password and start date - have no backend yet work in progress ",
          "User name",
          "Password",
          "Start date",
        ]}
        showButton={true}
        buttonText="Sign-up"
        buttonHref="/clean"
      />
      <InfoText
        style={{ marginTop: "10px" }}
        title="Progressive Web App"
        subtitle="Enhance Your User Experience"
        text={[
          "A Progressive Web App (PWA) leverages modern web technologies to provide an app-like experience directly from the web. By installing a PWA on your mobile device, it can operate and appear similar to a app.",
          "Installation Instructions - How to Install the PWA",
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
        showButton={false}
        buttonText=""
        buttonHref="/"
      />

      <InfoText
        style={{ marginTop: "10px" }}
        title="Privacy Policy"
        subtitle="Your Data Protection Rights"
        text={[
          "We are committed to protecting your personal data and respecting your privacy. Here's how we handle your data in compliance with GDPR:",
          "1. **Data Collection** - We only collect your username, password, and start date. This information is necessary for the app's functionality.",
          "2. **User Consent** - By using our app, you consent to the collection and processing of your data.",
          "3. **Data Security** - We implement strong security measures to protect your data from unauthorized access or breaches.",
          "4. **Right to Access and Erasure** - You have the right to access your data and request its deletion at any time.",
        ]}
        showButton={false}
        buttonText=""
        buttonHref="/"
      />

      <Fotter />
    </div>
  );
}
