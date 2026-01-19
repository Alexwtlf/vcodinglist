"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// Icons
function LightningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

// Intersection Observer hook for scroll animations - returns tuple [ref, isVisible]
function useInView(threshold = 0.1): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export function ValueProps() {
  const [painPointsRef, isPainPointsVisible] = useInView();
  const [howItWorksRef, isHowItWorksVisible] = useInView();
  const [differentiatorRef, isDifferentiatorVisible] = useInView();

  return (
    <div className="relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-20 top-20 h-96 w-96 animate-pulse rounded-full bg-primary/20 blur-3xl" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-20 right-20 h-96 w-96 animate-pulse rounded-full bg-secondary/20 blur-3xl" style={{ animationDuration: "5s" }} />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" style={{ animationDuration: "6s" }} />
      </div>

      {/* Pain Points Section */}
      <section ref={painPointsRef} className="relative z-10 bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Main Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Building is easy.
              <br />
              <span className="gradient-text">Getting users is not.</span>
            </h2>
          </div>

          {/* Sound Familiar Badge */}
          <div className={`mb-16 text-center transition-all duration-700 ${isPainPointsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="mb-6 inline-block rounded-full border border-destructive/30 bg-destructive/10 px-6 py-2">
              <span className="text-sm font-bold uppercase tracking-wider text-destructive">Sound Familiar?</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              This Is Your Chance
            </h3>
          </div>

          {/* Scenario Cards */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Scenario 1 */}
            <div
              className={`transition-all duration-700 delay-100 ${isPainPointsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="group h-full rounded-2xl border border-destructive/20 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-destructive/40 hover:shadow-2xl hover:shadow-destructive/10">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                    <LightningIcon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Want to get users fast?</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  You just shipped your app. You want <span className="font-semibold text-destructive">real users now</span>, not in 6 months.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You want to go <span className="font-semibold text-destructive">viral</span>? You need distribution, not just visibility.
                </p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div
              className={`transition-all duration-700 delay-200 ${isPainPointsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="group h-full rounded-2xl border border-amber-500/20 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10">
                <div className="mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                    <WarningIcon className="h-6 w-6 text-amber-500" />
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">Have a great product but stuck?</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  You built something awesome. But you <span className="font-semibold text-amber-500">can&apos;t break through the noise</span>.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Product Hunt? Everyone&apos;s there. You need <span className="font-semibold text-amber-500">a different channel</span>.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Arrow */}
          <div className={`text-center transition-all duration-700 delay-300 ${isPainPointsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
              <ArrowDownIcon className="h-8 w-8 animate-bounce text-primary" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            <p className="text-xl text-muted-foreground">Here&apos;s how we solve this</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className={`mb-20 text-center transition-all duration-700 ${isHowItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
              <span className="gradient-text">How VcodingList Actually Works</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Not just another launch platform. A distribution engine.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="relative mb-20 grid gap-8 md:grid-cols-3">
            {/* Connecting lines - desktop only */}
            <div className="pointer-events-none absolute left-1/3 top-1/2 hidden w-1/3 -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="h-0.5 w-full animate-pulse bg-gradient-to-r from-primary/50 to-secondary/50" style={{ animationDuration: "3s" }} />
            </div>
            <div className="pointer-events-none absolute left-2/3 top-1/2 hidden w-1/3 -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="h-0.5 w-full animate-pulse bg-gradient-to-r from-secondary/50 to-primary/50" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
            </div>

            {/* Step 1 */}
            <div className={`relative transition-all duration-700 delay-100 ${isHowItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
              <div className="group h-full rounded-2xl border border-primary/30 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute -left-6 -top-6 flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-3xl font-bold shadow-lg shadow-primary/50 transition-transform duration-500 group-hover:rotate-0">
                  1
                </div>
                <div className="mb-4 text-primary">
                  <LightningIcon className="h-12 w-12" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">Launch & Signal</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Your product gets ranked by builders who <span className="font-semibold text-primary">understand AI-native products</span>. No vanity applause — only signal.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`relative transition-all duration-700 delay-200 ${isHowItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
              <div className="group h-full rounded-2xl border border-secondary/30 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-secondary/60 hover:shadow-2xl hover:shadow-secondary/20">
                <div className="absolute -left-6 -top-6 flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 text-3xl font-bold shadow-lg shadow-secondary/50 transition-transform duration-500 group-hover:rotate-0">
                  2
                </div>
                <div className="mb-4 text-secondary">
                  <FilterIcon className="h-12 w-12" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">Validation Filter</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Only products with <span className="font-semibold text-secondary">real traction</span> move forward. Upvotes + comments = proof, not hype.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`relative transition-all duration-700 delay-300 ${isHowItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
              <div className="group h-full rounded-2xl border border-primary/30 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20">
                <div className="absolute -left-6 -top-6 flex h-16 w-16 rotate-3 items-center justify-center rounded-2xl gradient-teal-cyan text-3xl font-bold shadow-lg shadow-primary/50 transition-transform duration-500 group-hover:rotate-0">
                  3
                </div>
                <div className="mb-4 text-primary">
                  <RocketIcon className="h-12 w-12" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">Distribution to Real Users 🚀</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Top products are <span className="font-semibold text-primary">pushed outside the platform</span> into consumer channels where people actually download apps.
                </p>
              </div>
            </div>
          </div>

          {/* Differentiator Card */}
          <div
            ref={differentiatorRef}
            className={`relative transition-all duration-700 delay-500 ${isDifferentiatorVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <div className="absolute -inset-4 animate-pulse rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-2xl" style={{ animationDuration: "4s" }} />

            <div className="relative rounded-3xl border-2 border-primary/50 bg-card p-12 text-center shadow-2xl md:p-16">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="gradient-teal-cyan whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold text-white shadow-lg">
                  THIS IS THE DIFFERENCE
                </div>
              </div>

              <div className="mb-8 flex items-center justify-center gap-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <ArrowDownIcon className="h-8 w-8 animate-bounce text-primary" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <p className="mb-8 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="gradient-text">We don&apos;t sell attention inside the platform.</span>
              </p>

              <p className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
                We take products{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-primary">outside the platform.</span>
                  <span className="absolute bottom-0 left-0 -z-0 h-3 w-full animate-pulse bg-primary/30" />
                </span>
              </p>

              <div className="mt-12 flex items-center justify-center gap-4 text-muted-foreground">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <span className="text-sm font-semibold uppercase tracking-wider">Distribution &gt; Attention</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
