"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const value = email.trim();
    if (!value) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(value)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // UI-only: simulate request latency
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="mx-auto w-full max-w-xl animate-scale-in">
        <div className="rounded-xl border border-primary/20 bg-accent p-6 text-center">
          <p className="font-medium text-accent-foreground">
            🎉 You&apos;re on the list! We&apos;ll email you at launch.
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          id="waitlist-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="scroll-mt-28 h-14 min-h-[56px] w-full flex-1 appearance-none rounded-xl border border-border bg-background px-5 text-base text-foreground shadow-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/20 disabled:opacity-60"
          disabled={status === "loading"}
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-14 min-h-[56px] whitespace-nowrap rounded-xl bg-primary px-8 text-base font-medium text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join Waitlist"}
        </button>
      </form>

      {status === "error" && (
        <div className="mt-4 animate-scale-in rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-center">
          <p className="text-sm font-medium text-destructive">{errorMessage}</p>
        </div>
      )}

      {status !== "error" && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          We respect your privacy. No spam, ever.
        </p>
      )}
    </div>
  );
}

