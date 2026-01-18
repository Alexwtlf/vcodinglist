import { WaitlistForm } from "@/components/landing/WaitlistForm";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center text-center animate-fade-up">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary" aria-hidden="true">
              <path d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M5 13l.7 2.1L8 16l-2.3.9L5 19l-.7-2.1L2 16l2.3-.9L5 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M19 13l.7 2.1L22 16l-2.3.9L19 19l-.7-2.1L16 16l2.3-.9L19 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            Built for the vibe coding era
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="whitespace-nowrap">Launch. Get feedback.</span>
            <br />
            <span className="gradient-text">Find your first 100 users.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          A discovery and ranking platform for AI-native builders.
            <br className="hidden sm:block" />
             Submit your product in under 60 seconds.
          </p>
        </div>

        <div className="mt-auto w-full pt-10 sm:pt-12">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

