const cards = [
  {
    icon: "💬",
    title: "Real Feedback, Not Noise",
    body: "Get early feedback from builders and early adopters who understand AI-native products — not vanity comments.",
  },
  {
    icon: "📊",
    title: "Validation Through Rankings",
    body: "Community votes and leaderboards surface real signal. Strong products rise. Weak ideas fade early.",
  },
  {
    icon: "🌍",
    title: "From Validation to Real Users",
    body: "Top-ranked products don’t stop at visibility. They get distributed to real users looking for AI-powered solutions.",
  },
  {
    icon: "🤖",
    title: "Built for Vibe Coders",
    body: "Show what percentage of your product was built using tools like Cursor, Claude, v0, or Lovable.",
  },
] as const;

export function ValueProps() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          Building is easy.
          <br />
          <span className="gradient-text">Getting users is not.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          <span className="font-brand">VCODINGLIST</span> solves the real bottlenecks AI-native
          builders face today.
        </p>
      </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

