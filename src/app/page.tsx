import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Quote } from "@/components/landing/Quote";
import { Stats } from "@/components/landing/Stats";
import { ValueProps } from "@/components/landing/ValueProps";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        <Stats />
        <ValueProps />
        <Quote />
      </main>

      <Footer />
    </div>
  );
}

