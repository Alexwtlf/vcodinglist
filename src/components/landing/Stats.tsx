import type { SVGProps } from "react";
import Image from "next/image";

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21v-2a4 4 0 0 0-3-3.87"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3l1.2 3.6L17 8l-3.8 1.4L12 13l-1.2-3.6L7 8l3.8-1.4L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 13l.7 2.1L8 16l-2.3.9L5 19l-.7-2.1L2 16l2.3-.9L5 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 13l.7 2.1L22 16l-2.3.9L19 19l-.7-2.1L16 16l2.3-.9L19 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type IconProps = { className?: string };

function CursorIcon({ className }: IconProps) {
  return (
    <Image
      src="/cursor.png"
      alt="Cursor logo"
      width={24}
      height={24}
      className={className}
    />
  );
}

const metrics = [
  { value: "2M+", label: "AI-native builders", icon: UsersIcon },
  { value: "80%", label: "avg. Vibe in 2026", icon: SparklesIcon },
  { value: "Cursor", label: "top AI-native tool", icon: CursorIcon },
] as const;

export function Stats() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-wrap justify-center gap-8 sm:gap-12">
          {metrics.map((metric) => (
            <div key={metric.value} className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
                {metric.icon ? <metric.icon className="h-6 w-6 text-primary" /> : null}
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="flex -space-x-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="gradient-teal-cyan h-10 w-10 rounded-full border-2 border-background shadow-sm"
                style={{ opacity: 1 - index * 0.1 }}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="ml-4 text-sm text-muted-foreground">
          Early builders get featured here
          </span>
        </div>
      </div>
    </section>
  );
}

