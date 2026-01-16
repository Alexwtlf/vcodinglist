import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollManager } from "@/components/ScrollManager";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  title: "VcodingList — Launch. Validate. Reach Real Users.",
  description:
    "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "VcodingList",
    title: "VcodingList — Launch. Validate. Reach Real Users.",
    description:
      "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "VcodingList",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VcodingList — Launch. Validate. Reach Real Users.",
    description:
      "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} min-h-dvh`}>
        <ScrollManager />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

