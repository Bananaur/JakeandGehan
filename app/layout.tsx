import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jakeandgehan.vercel.app"),

  title: "You Are Invited!",
  description:
    "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026 at Villa Cruz Nature's Resort.",

  openGraph: {
    title: "You Are Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.",
    url: "https://jakeandgehan.vercel.app",
    siteName: "Jake & Gehan Wedding",
    images: [
      {
        url: "/hij.png?v=1",
        width: 1200,
        height: 630,
        alt: "Jake and Gehan Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "You Are Invited!",
    description:
      "Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.",
    images: ["/hij.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  );
}