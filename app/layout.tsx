import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahavir Goyal - Backend Software Engineer',
  description: 'Experienced Backend Software Engineer specializing in Node.js, Python, and scalable system architecture. Building robust solutions for modern applications.',
  keywords: 'Backend Engineer, Node.js, Python, Software Engineer, API Development, System Architecture, SDE 2',
  authors: [{ name: 'Mahavir Goyal' }],
  creator: 'Mahavir Goyal',
  openGraph: {
    title: 'Mahavir Goyal - Backend Software Engineer',
    description: 'Experienced Backend Software Engineer specializing in Node.js, Python, and scalable system architecture.',
    url: 'https://mahavirgoyal32.github.io/my_portfolio',
    siteName: 'Mahavir Goyal Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahavir Goyal - Backend Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahavir Goyal - Backend Software Engineer',
    description: 'Experienced Backend Software Engineer specializing in Node.js, Python, and scalable system architecture.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}