//page.js
"use client";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
// import Form from "@/components/form/Form";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";
import FormContainer from "@/components/form-container /FormContainer";

export default function Home() {
  return (
    <main className="wrapper no-scroll">
      <Header includeNav={false} />
      <Hero />
      <div className="box">
        {/* <Form /> */}
        <FormContainer />
        <InfoText
          style={{ marginTop: "80px" }}
          title="CLEAN"
          subtitle="Track Your Sobriety Journey"
          text={[
            "CLEAN is an innovative app designed to help you track your sobriety time through a visual experience. Each day is represented by a circle, and the central circle reflecting a single day. Over the course of 24 hours, this circle transitions from white to black, visually marking the passage of time. As days go by, new circles are added, creating a dynamic visual record of your sobriety. At the start of each sober year, the new circles take on a new color, marking the passage of time and adding a fresh perspective to your progress.",
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
