import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Form from "@/components/form/Form";
import InfoText from "@/components/infotext/InfoText";
import Fotter from "@/components/footer/Fotter";

export default function Home() {
  return (
    <main className="wrapper no-scroll">
      <Header includeNav={false} />
      <Hero />
      <div className="box">
        <Form />
        <InfoText />
      </div>
      <Fotter />
    </main>
  );
}
