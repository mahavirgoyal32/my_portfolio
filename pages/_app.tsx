// pages/_app.tsx
import './styles/globals.css'
import type { AppProps } from 'next/app'

// Optional: import custom font class if needed
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Remove <html> and <body> — Next handles them
    <div className="scroll-smooth"> {/* Optional wrapper */}
      <Component {...pageProps} />
    </div>
  )
}
