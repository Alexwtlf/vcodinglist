export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center animate-fade-up">
        <p className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
        Built for the AI-native era
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Launch. Validate.
          <br />
          <span className="gradient-text">Reach Real Users.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          The product discovery and ranking platform for AI-native builders.
          <br className="hidden sm:block" />
          Turn early traction into real users.
        </p>
      </div>
    </section>
  );
}

