import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Header includeNav={false} />
      <Hero />
    </main>
  );
}
