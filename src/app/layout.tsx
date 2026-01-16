import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VcodingList — Launch. Validate. Reach Real Users.",
  description:
    "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh antialiased`}>
        {children}
      </body>
    </html>
  );
}

