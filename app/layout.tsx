import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'You Are Invited!',
  description: 'Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.',

  openGraph: {
    title: 'You Are Invited!',
    description: 'Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.',
    images: [
      'https://i.imgur.com/jCQnuT0.png',
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'You Are Invited!',
    description: 'Join us as we celebrate the wedding of Jake & Gehan on July 14, 2026.',
    images: [
      'https://i.imgur.com/jCQnuT0.png',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
