import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakeandgehan.vercel.app"),

  title: "Jake & Gehan Wedding",
  description: "July 14, 2026 • Villa Cruz Nature's Resort",

  openGraph: {
    title: "Jake & Gehan Wedding",
    description: "July 14, 2026 • Villa Cruz Nature's Resort",
    url: "https://jakeandgehan.vercel.app",
    siteName: "Jake & Gehan Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jake and Gehan Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jake & Gehan Wedding",
    description: "July 14, 2026 • Villa Cruz Nature's Resort",
    images: ["/og-image.jpg"],
  },
};