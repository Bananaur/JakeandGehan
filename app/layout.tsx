import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jakeandgehan.vercel.app"),

  title: "You Are Invited!",

  description:
    "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026 at Villa Cruz Nature's Resort.",

  openGraph: {
    title: "You Are Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026 at Villa Cruz Nature's Resort.",
    url: "https://jakeandgehan.vercel.app",
    siteName: "Jake & Gehan Wedding",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jake & Gehan Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "You Are Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026 at Villa Cruz Nature's Resort.",
    images: ["/og-image.png"],
  },
};