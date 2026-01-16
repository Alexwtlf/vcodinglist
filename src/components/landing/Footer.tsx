export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <a
          href="https://twitter.com/alexib"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
          aria-label="Follow on X (Twitter)"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>
            Built in public by{" "}
            <a
              href="https://twitter.com/alexwtlf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
            >
              @alexwtlf
            </a>
          </p>
          <p className="font-medium text-foreground">
            From validation to real users.
          </p>
          <p>
            <a
              href="mailto:contact@vcodinglist.com"
              className="transition-colors hover:text-primary"
            >
              contact@vcodinglist.com
            </a>
          </p>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} VcodingList. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

