import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MoodFood - Eat what you feel',
  description: 'Connect your emotions with personalized food recommendations to improve your mood and overall well-being through mindful eating.',
  keywords: 'mood food, emotional eating, food recommendations, mindful eating, wellness, recipes',
  authors: [{ name: 'MoodFood Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
          {children}
        </div>
      </body>
    </html>
  )
}
