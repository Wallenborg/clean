import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Form from "@/components/form/Form";
import InfoText from "@/components/infotext/InfoText";

export default function Home() {
  return (
    <main className="wrapper">
      <Header includeNav={false} />
      <Hero />
      <Form />
      <InfoText />
    </main>
  );
}
