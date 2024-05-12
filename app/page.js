import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main>
      <Header includeNav={false} />
      <Hero />
      <Form />
    </main>
  );
}
