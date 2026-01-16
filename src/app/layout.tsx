import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollManager } from "@/components/ScrollManager";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VcodingList — Launch. Validate. Reach Real Users.",
  description:
    "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://vcodinglist.com"),
  openGraph: {
    type: "website",
    title: "VcodingList — Launch. Validate. Reach Real Users.",
    description:
      "The product discovery and ranking platform for AI-native builders. Turn early traction into real users.",
    url: "/",
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
      <body className={`${inter.className} min-h-dvh antialiased`}>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}

