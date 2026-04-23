import './globals.css'
import { Inter } from 'next/font/google'
import AppWrapper from '@/components/app-components/AppWrapper'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'White Space',
  description: 'Just a white space for your thoughts.',
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body
        suppressHydrationWarning
        className="relative w-full h-full bg-bg selection:bg-main/75 text-text selection:text-text antialiased md:subpixel-antialiased scroll-smooth"
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
