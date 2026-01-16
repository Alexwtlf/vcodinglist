import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Quote } from "@/components/landing/Quote";
import { Stats } from "@/components/landing/Stats";
import { ValueProps } from "@/components/landing/ValueProps";
import { WaitlistForm } from "@/components/landing/WaitlistForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <div className="relative">
          <Hero />

          <div
            id="waitlist"
            className="relative z-10 -mt-32 px-4 pb-8 sm:px-6 lg:px-8"
          >
            <WaitlistForm />
          </div>
        </div>

        <Stats />
        <ValueProps />
        <Quote />
      </main>

      <Footer />
    </div>
  );
}

