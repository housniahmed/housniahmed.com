import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://housniahmed.com"),
  title: {
    default: "Ahmed El-Housni — AI Engineer",
    template: "%s | Ahmed El-Housni",
  },
  description:
    "Ahmed El-Housni's personal AI Engineering Hub — intelligent systems, AI automation, digital products, research, and selected work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmed El-Housni — AI Engineer",
    description:
      "AI engineering, intelligent systems, automation, digital products, and applied research.",
    url: "https://housniahmed.com",
    siteName: "Ahmed El-Housni",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
