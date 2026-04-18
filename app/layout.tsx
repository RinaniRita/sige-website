import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ContactBubbles } from '@/components/ContactBubbles'
import { PromoModal } from '@/components/PromoModal'
import { getHomeContent } from '@/lib/google-sheet-content'
import './globals.css'

const _beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const _playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: 'SIGE',
  description: 'Created by OneHammer',
  generator: 'OneHammer',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const homeContent = await getHomeContent()

  return (
    <html lang="en">
      <body className={`${_beVietnamPro.variable} ${_playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <ContactBubbles />
        <PromoModal consultationForm={homeContent.consultationForm} />
        <Analytics />
      </body>
    </html>
  )
}
